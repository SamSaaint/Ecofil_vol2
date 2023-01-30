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
    filtrZar: [
        {
            type:Schema.Types.ObjectId,
            ref:"Zariadenie"
        }
    ],
    kategoria: {
        type:String,
        enum:["Rada 101", "Rada 201", "Rada 351", "Rada 401"]
    }
});

module.exports = mongoose.model("Vlozka", vlozkaSchema);