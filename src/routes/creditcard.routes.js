import * as ctrCreditCard from "../controllers/creditcard.controller.js";
import { Router } from "express";

const routerCreditCard = Router();

routerCreditCard.post("/", ctrCreditCard.crearCreditCard);

routerCreditCard.get("/", ctrCreditCard.obtenerCreditCard);

routerCreditCard.put("/:id", ctrCreditCard.actualizarCreditCard);

routerCreditCard.delete("/deleteCreditCard/:id", ctrCreditCard.eliminarCreditCard);

export default routerCreditCard;