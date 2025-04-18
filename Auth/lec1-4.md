# 🛡️ Authentication & Authorization Deep Dive 🔑

## 🚦 Topics Covered:

* Auth vs AuthZ
* Session vs Token
* Cookies vs LocalStorage
* JWT
* Signature-based verification
* Token expiry
* CSRF
* CORS
* Rate limiting
* JWT vs Session in NextAuth

---

## 🔑 Lesson 1: Authentication vs Authorization (with Real-life Analogy) 🤔

### 👤 Authentication: Prove Who You Are 🆔

1.  It means to prove your identity, like showing your ID card at the entrance gate. 🛂

2.  In code, the client-side might send:
    ```json
    {
      "email": "adbc",
      "password": "1234"
    }
    ```
    Then, the backend checks these credentials using middleware. If correct, the backend responds with:
    ```json
    {
      "accessToken": "xyz.abc.123",
      "user": {
        "name": "Dru",
        "role": "admin"
      }
    }
    ```

### 🛡️ Authorization: What You Are Allowed to Do 🔓

1.  Here, we check the user's role and the actions they are permitted to perform. ⚙️
2.  For example, in code:
    ```javascript
    if (user.role === 'admin') {
      // allow deleting a user 🗑️
    }
    ```

---

## 🔄 Lesson 2: Session vs Token-Based Authentication 🗝️

### 💾 SESSION BASED Authentication 🍪

1.  Session information is stored in the database. A unique session ID is generated and sent to the client-side, where it's typically stored in a cookie. 📜

2.  **Steps:**
    * User login ➡️
    * Server creates a record in the database ➡️
    * Generates a session record: `{ sessionId: "abc123", userId: "dru" }` ➡️
    * Sends a cookie to the client-side: `Set-Cookie: sessionId=abc123; HttpOnly` ➡️
    * On subsequent requests, the server identifies the user using the session ID from the cookie. 🔗 This creates a pipeline between all concurrently active user sessions.

3.  **Pros:**
    * Server Controlled ✅
    * Safer (especially with `HttpOnly` flag) 👍
    * Battle-tested and well-understood 💪

4.  **Cons:**
    * Requires a database 💾
    * Harder to scale in microservices architectures  масштабирование 😟

    **`HttpOnly` Flag:** Prevents JavaScript from reading or modifying the cookie.
    ```javascript
    console.log(document.cookie); // ❌ Will NOT show HttpOnly cookies
    ```
    This helps prevent Cross-Site Scripting (XSS) attacks. 🛡️

### 🔑 JWT (JSON Web Token) Based Authentication 🔓

1.  A form of Token-based Authentication. 🎫
2.  No server-side database storage for sessions is needed. 🚫💾
3.  **Steps:**
    * User login ➡️
    * Server sends a JWT:
        ```json
        {
          "accessToken": "eyJhbGci... (contains user ID, role)"
        }
        ```
    * Client-side stores the token (e.g., in memory or a cookie) 💾
    * Every subsequent request includes the token in the `Authorization` header (Bearer token). 📤
    * Server decodes the token, verifies its signature, and extracts the user information. 🔍

4.  Similar to Session IDs, JWT tokens are sent with every request to the server to retrieve user data. 📤

🤔 **But Won’t This Be Slow?** 🐌

Nope! 🚀 JWTs are just Base64-encoded strings:
* No database lookup is typically needed (unless you're implementing token blacklisting or refresh tokens). 💨
* Decoding and verifying the token is very fast (microseconds!). ⚡

---

## 🍪 Lesson 3: HTTP Cookies vs LocalStorage 💾

### 🍪 COOKIES 📜

A cookie is a small piece of data that the server asks the browser to store. The browser automatically sends it back with every future request to the same server (unless restricted by flags). 🌐 Cookies are used to maintain state in HTTP, which is inherently stateless. ⚙️

**Example:** `Set-Cookie: sessionId=abc123; HttpOnly; Secure`

**Cookie Flags:** These are attributes set by the server in the `Set-Cookie` header:
* `HttpOnly`: JavaScript cannot access the cookie → protects against XSS attacks. 🛡️
* `Secure`: The cookie is only sent over HTTPS connections → ensures data privacy. 🔒
* `SameSite`: Helps prevent Cross-Site Request Forgery (CSRF) attacks by controlling when the cookie is sent in cross-origin requests. 🛡️

### 💾 LOCAL STORAGE 📦

Manual storage in the browser. Data stored in `localStorage` is **not** automatically sent with HTTP requests. 📤

**Example:**
```javascript
localStorage.setItem('token', 'xyz');

## 🔑 Lesson 4: JWT (JSON Web Token) Explained 🧩

When a client sends a request to the server with a JWT, the following happens:

The JWT is split into three parts, separated by dots (`.`):
* **Part 1: HEADER** ⚙️ Contains metadata about the token, such as the algorithm used for signing (e.g., HS256) and the token type.
* **Part 2: PAYLOAD** payload 🧾 Contains the actual data (claims) about the user or entity. **Important:** This part is **not** encrypted, only Base64 encoded, meaning anyone with the token can read its contents! 👀
* **Part 3: SIGNATURE** ✍️ Ensures the integrity of the token and verifies that it hasn't been tampered with. Only someone with the secret key can create a valid signature. 🤫

**Verification Steps:**
1.  Splits the JWT into its three parts: `header.payload.signature`. ✂️
2.  Recalculates the expected signature using the header, payload, and the server's secret key. 🔑
3.  Compares the calculated signature with the signature provided in the token. 🧐
4.  **If the signatures match ✅:** The token is considered valid, and the server can trust the information in the payload (e.g., user ID, roles). The server then proceeds with the request.
5.  **If the signatures do not match ❌:** The token has been tampered with or is invalid. The server rejects the request, as the identity of the user cannot be verified securely. 🚫

**Example Code (Node.js):**
```javascript
import jwt from "jsonwebtoken";

// Assuming the token is in the Authorization header as a Bearer token
const token = req.headers.authorization.split(" ")[1];
const userData = jwt.verify(token, process.env.JWT_SECRET);
console.log(userData); // { sub: 'userId123', name: 'Dru', role: 'admin' }

The jwt.verify() function is crucial for validating the authenticity and integrity of the JWT. ✅