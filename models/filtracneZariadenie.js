const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const obrazokSchema = new Schema({
    path: String,
    filename: String
});

const zariadenieSchema = new Schema({
    nazov: String,
    obrazok: obrazokSchema,
    objOlejNad: String,
    elMotor: String,
    normPriet: String,
    maxTlak: String,
    kategoria: {
        type:String,
        enum:["Rada SN", "Rada ONW", "Transformátorové", "Výbušné", "Špeciálne"]
    }
});

module.exports = mongoose.model("Zariadenie", zariadenieSchema);