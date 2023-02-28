const express = require("express");
const router = express.Router();
const Vlozka = require("../../../models/filtracnaVlozka");
const Zariadenie = require("../../../models/filtracneZariadenie");
const { isLoggedIn } = require("../../../middleware");
const multer = require("multer");
const { storage } = require("../../../cloudinary");
const upload = multer({ storage });

// show all
router.get("/", async (req,res)=>{
    const vlozky = await Vlozka.find({}).populate({ path:"filtrZar" });
    res.render("../views/produkty/filtracneVlozky", { vlozky })
})

// add new vlozka
router.get("/new",isLoggedIn, async (req,res)=>{
    const zariadenia = await Zariadenie.find({});
    res.render("../views/produkty/filtracneVlozky/new", { zariadenia })
})

router.post("/",isLoggedIn, upload.single('obrazok'), async (req,res)=>{
    const vlozka = new Vlozka(req.body.filtracnaVlozka);
    const { filename, path } = req.file;
    vlozka.obrazok = { path, filename };
    await vlozka.save();
    res.redirect("/produkty/filtracne-vlozky");
})

// edit vlozka
router.get("/:id/edit",isLoggedIn, async (req,res)=>{
    const vlozka = await Vlozka.findById(req.params.id);
    const zariadenia = await Zariadenie.find({});
    res.render("../views/produkty/filtracneVlozky/edit", { vlozka, zariadenia });
})

router.put("/:id",isLoggedIn, upload.single('obrazok'), async (req,res)=>{
    const { id } = req.params;
    const vlozka = await Vlozka.findByIdAndUpdate(id, { ...req.body.filtracnaVlozka });
    const { filename, path } = req.file;
    vlozka.obrazok = { path, filename };
    await vlozka.save();
    res.redirect("/produkty/filtracne-vlozky");
})

// delete vlozka
router.delete("/:id",isLoggedIn, async (req,res)=>{
    const { id } = req.params;
    await Vlozka.findByIdAndDelete(id);
    res.redirect("/produkty/filtracne-vlozky");
})

module.exports = router;