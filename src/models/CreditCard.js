import { Schema, model } from "mongoose";

const creditCardSchema = new Schema({
    card__number: {
        type: String,
        require: true,
        unique: true
    },
    card__expires: {
        type: String,
        require: true
    },
    card__holder: {
        type: String,
        require: true,
    },
    cvv__code: {
        type: String,
        require: true
    }
});

const creditCardModel = model("CreditCard", creditCardSchema);

export default creditCardModel;