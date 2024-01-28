import express from "express";
import conexionDB from "./db.connection.js";
import routerCreditCard from "./routes/creditcard.routes.js";
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();

//Conexion a la DB
conexionDB();

// Habilitamos el CORS para cualquier ruta
app.use(cors());

//settings
app.set("name", "Api CreditCard");
app.set("port", process.env.PORT || 3500);

//middleware
app.use(express.json());

//llamado de rutas
app.get("/", (req, res) => {
    res.send("Welcome to CreditCard Api");
});
app.use(express.static("public"));
app.use("/api/creditcard", routerCreditCard);

export default app;