const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const obrazokSchema = new Schema({
    path: String,
    filename: String
});

const telesoSchema = new Schema({
    nazov: String,
    obrazok: obrazokSchema,
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
    filtrVlozka: {
        type:Schema.Types.ObjectId,
        ref:"Vlozka"
    },
    material: String,
    kategoria: {
        type:String,
        enum:["Séria T", "Séria H", "Ostatné"]
    }
});

module.exports = mongoose.model("Teleso", telesoSchema);