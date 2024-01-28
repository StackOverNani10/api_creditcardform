import creditCardModel from "../models/CreditCard.js";

export async function crearCreditCard(req, res) {

    try {
        const { card__number, card__expires, card__holder, cvv__code } = req.body;
        if (card__number && card__holder && card__expires && cvv__code) {
            const newCreditCard = new creditCardModel({ card__number, card__expires, card__holder, cvv__code });
            await newCreditCard.save();
            res.status(201).json({ isOk: true, msj: `Creditcard de numeración ${card__number} almacenada de forma satisfactoria`, id: newCreditCard._id, card__holder: card__holder });
        } else {
            res.status(400).json({ isOk: false, msj: "No se encuentran todos los datos", errors });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export async function obtenerCreditCard(req, res) {
    try {
        const id = req.params.id;

        if (id) {
            //Buscar Creditcard por su id
            const creditCardData = await creditCardModel.find({ _id: id });
            res.status(200).json({ isOk: true, datos: creditCardData });
        } else {
            res.status(404).json({ isOk: false, msj: "CreditCard no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export async function actualizarCreditCard(req, res) {
    try {
        const id = req.params.id;
        const { card__number, card__expires, card__holder, cvv__code } = req.body;

        if (id) {
            //Buscar data de la creditcard por id
            await creditCardModel.updateOne({ _id: id }, { $set: { card__number, card__expires, card__holder, cvv__code } });
            res.status(200).json({ isOk: true, msj: "Datos actualizado de forma satisfactoria" });
        } else {
            res.status(404).json({ isOk: false, msj: "CreditCard no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export async function eliminarCreditCard(req, res) {
    try {
        const id = req.params.id;

        await creditCardModel.findByIdAndDelete(id);
        res.status(200).json({ isOk: true, msj: "CreditCard borrada de forma satisfactoria" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};