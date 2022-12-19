const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vlozkaSchema = new Schema({
    obrazok: String,
    typ: String,
    material: String,
    priemer: Number,
    vyska: Number,
    hmotnost: Number,
    prietok: Number,
    absorbVody: Number,
    kapFiltr: String,
    filtrZar: String
});

module.exports = mongoose.model("Vlozka", vlozkaSchema);