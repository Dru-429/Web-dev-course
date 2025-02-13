1. create server
2. Create two diffrent port for development and production by .env.development.local etc
3. Set config folder 
4. Create env.js for setting port 
5. Create routes and then import them to the app.js 
    ---> app.use('/api/v1/auth', authRouter)
6. Create middelware for errorhandeling and import it to the app.js
7. npm i jsonwebtoken bcryptjs for creating Authentication 
8. Set new enviroment veriable for the JWT_Security and JWT_Expried and export them 
9. Create Controller '
        Controller it is a special funtion thats runs of hitting a endpoint like 
        /api/v1/auth/signup -> on going this we will run the controller signUp exproted from the auth.controller.js 
10. Let's build auth then for this install bcrypt and jsonwebtoken (npm install jsonwebtoken bcryptjs )
11. then create new dev env veriable that is #JWT AUTH JWT_SECRET = "secret" and JWT_EXPIRES_IN = "1d" and exprot it through config 
12. create controller folder -> then create auth.controller.js -> then export const signUP, signIn, signOut
13. then import them into Auth.route.js and place them 
14. then start creating this controllers auth fn 
15. 