const express = require("express");
const router = express.Router();
const Zariadenie = require("../../../models/filtracneZariadenie");

// show all
router.get("/",async (req,res)=>{
    const zariadenia = await Zariadenie.find({});
    res.render("../views/produkty/filtracneZariadenia", {zariadenia})
})

// add new zariadenie
router.get("/new", (req,res)=>{
    res.render("../views/produkty/filtracneZariadenia/new")
})

router.post("/", async (req,res)=>{
    const zariadenie = new Zariadenie(req.body.filtracneZariadenie);
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
router.get("/:id/edit", async (req,res)=>{
    const zariadenie = await Zariadenie.findById(req.params.id)
    res.render("../views/produkty/filtracneZariadenia/edit", { zariadenie })
})

router.put("/:id", async (req,res)=>{
    const { id } = req.params;
    const zariadenie = await Zariadenie.findByIdAndUpdate(id, {...req.body.filtracneZariadenie})
    await zariadenie.save();
    res.redirect(`/produkty/filtracne-zariadenia/${zariadenie._id}`);
})

// delete zariadenie
router.delete("/:id", async (req,res)=>{
    const { id } = req.params;
    await Zariadenie.findByIdAndDelete(id);
    res.redirect("/produkty/filtracne-zariadenia");
})

module.exports = router;