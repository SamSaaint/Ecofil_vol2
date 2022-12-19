const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zariadenieSchema = new Schema({
    nazov: String,
    obrazok: String,
    objOlejNad: String,
    elMotor: String,
    normPriet: String,
    maxTlak: String
});

module.exports = mongoose.model("Zariadenie", zariadenieSchema);