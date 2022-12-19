const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const telesoSchema = new Schema({
    nazov: String,
    obrazok: String,
    normPrietok: String,
    filtrSchopnost: String,
    maxTepOleja: String,
    maxObjNadrze: String,
    viskVstupnehoOleja: String,
    prevSkusTlak: String,
    hydrPripVstup: String,
    hydrPripVystup: String,
    vonkRozm: String,
    hmotnost: Number,
    filtrVlozka: String,
    material: String
});

module.exports = mongoose.model("Teleso", telesoSchema);