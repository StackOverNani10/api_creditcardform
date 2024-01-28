import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const conexionDB = async () => {
    try {
        const DB = await mongoose.connect('mongodb+srv://StackOverNani10:' + process.env.DBPASSWORD + '@creditcard.na5sbbt.mongodb.net/?retryWrites=true&w=majority');
        console.log("Successful connection to", DB.connection.name);
    } catch (error) {
        console.log(error.message);
    }
}

export default conexionDB;