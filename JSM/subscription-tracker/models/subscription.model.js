import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        name : {
            type: String, 
            required: [ true, "Subscription name is required"],
            trim: true,
            minLength : 2, 
            maxLength: 100,
        },
        price: {
            type: Number,
            required: [true, "Please enter price"],
            min: 0,
            max: 10000
        },
        currency: {
            type: String,
            enum: ['INR', 'USD', 'EUR', 'GBP'],
            default: 'INR'
        },
        frequency: {
            type: String,
            enum: ['daily', 'weekly', 'monthly', 'yearly']
        },
        category: {
            type: String,
            enum: ['sports', 'music', 'entertainment', 'lifestyle','other'],
            required: true
        },
        paymentMethod: {
            type: String,
            required: true,
            trim: true, 
        },
        status: {
            type: String,
            enum: ['active', 'cancelled', 'expired'],
            default: 'active',
        },
        
    },
    {timestamps:true}
)