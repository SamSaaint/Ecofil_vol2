const express = require("express");
const router = express.Router();
const Zariadenie = require("../../../models/filtracneZariadenie");
const { isLoggedIn } = require("../../../middleware");
const multer = require("multer");
const { storage } = require("../../../cloudinary");
const upload = multer({ storage });

// show all
router.get("/",async (req,res)=>{
    const zariadenia = await Zariadenie.find({});
    res.render("../views/produkty/filtracneZariadenia", {zariadenia})
})

// add new zariadenie
router.get("/new",isLoggedIn, (req,res)=>{
    res.render("../views/produkty/filtracneZariadenia/new")
})

router.post("/",isLoggedIn, upload.single('obrazok'), async (req,res)=>{
    const zariadenie = new Zariadenie(req.body.filtracneZariadenie);
    const { filename, path } = req.file;
    zariadenie.obrazok = { path, filename };
    await zariadenie.save();
    res.redirect("/produkty/filtracne-zariadenia");
})

// open zariadenie
router.get("/:id", async (req,res)=>{
    const id = req.params.id;
    const zariadenie = await Zariadenie.findById(id);
    res.render("../views/produkty/filtracneZariadenia/show", { zariadenie })
})

// edit zariadenie
router.get("/:id/edit",isLoggedIn, async (req,res)=>{
    const zariadenie = await Zariadenie.findById(req.params.id)
    res.render("../views/produkty/filtracneZariadenia/edit", { zariadenie })
})

router.put("/:id",isLoggedIn, upload.single("obrazok"), async (req,res)=>{
    const { id } = req.params;
    const zariadenie = await Zariadenie.findByIdAndUpdate(id, {...req.body.filtracneZariadenie});
    const { filename, path } = req.file;
    zariadenie.obrazok = { path, filename };
    await zariadenie.save();
    res.redirect(`/produkty/filtracne-zariadenia/${zariadenie._id}`);
})

// delete zariadenie
router.delete("/:id",isLoggedIn, async (req,res)=>{
    const { id } = req.params;
    await Zariadenie.findByIdAndDelete(id);
    res.redirect("/produkty/filtracne-zariadenia");
})

module.exports = router;