import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error('Please define the MONGODB_URI enviroment veriable instide .env.<development/production>.local')
}

const connectTODatabse = async () => {
    try {
        await mongoose.connect(DB_URI)

        console.log(`Connected to the DB in ${NODE_ENV} mode`)
    } catch (error) {
        console.error('Error connecting to the database...')

        process.exit(1)
    }
}

export default connectTODatabse