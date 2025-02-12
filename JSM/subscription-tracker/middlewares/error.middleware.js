// middileware are the fn thats runs like pre or before or after and they can also runs between the functions 
//then they said ok run whats nexts 

//eg: subscription -> middelware(check for renewal date ) -> middleware (check for subscription status) -> next  -> controller

const errorMiddelware = (err, req, res, next) => {
    try {
        let error = {...err}

        error.message = err.message
        console.log(err)

        //Mongoose bad objectID 
        if (err.name === "CastError") {
            const message = 'Resource not found '
            error = new Error(message)
            error.statusCode = 404
        }

        //Mongoose duplicate key
        if (err.code == 11000) {
            const message = "Duplicate field value entered"
        }

        //Mongoose validation error 
        if (err.name == 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message)
            error = new Error( message.join(','))
            error.statusCode = 400
        }

        res.status( error.statusCode || 500).json({ success: false, error: error.message || 'Server Error'})
    } 
    catch (error) {
        next(error)
    }
}

export default errorMiddelware