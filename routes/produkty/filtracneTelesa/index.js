const express = require("express");
const router = express.Router();
const Teleso = require("../../../models/filtracneTeleso");
const Vlozka = require("../../../models/filtracnaVlozka");

// show all
router.get("/",async (req,res)=>{
    const telesa = await Teleso.find({}).populate({path:"filtrVlozka"});
    res.render("../views/produkty/filtracneTelesa", { telesa });
})

//add new teleso
router.get("/new", async (req,res)=>{
    const vlozky = await Vlozka.find({});
    res.render("../views/produkty/filtracneTelesa/new", { vlozky })
})

router.post("/", async (req,res)=>{
    const teleso = await new Teleso(req.body.filtracneTeleso);
    await teleso.save();
    res.redirect("/produkty/filtracne-telesa");
})

// open teleso
router.get("/:id", async (req,res)=>{
    const id = req.params.id;
    const teleso = await Teleso.findById(id).populate({path:"filtrVlozka"});
    res.render("../views/produkty/filtracneTelesa/show", { teleso })
})

// edit teleso
router.get("/:id/edit", async (req,res)=>{
    const teleso = await Teleso.findById(req.params.id);
    const vlozky = await Vlozka.find({}); 
    res.render("../views/produkty/filtracneTelesa/edit", { teleso, vlozky })
})

router.put("/:id", async (req,res)=>{
    const { id } = req.params;
    const teleso = await Teleso.findByIdAndUpdate(id, {...req.body.filtracneTeleso})
    await teleso.save();
    res.redirect(`/produkty/filtracne-telesa/${teleso._id}`);
})

// delete teleso
router.delete("/:id", async (req,res)=>{
    const { id } = req.params;
    await Teleso.findByIdAndDelete(id);
    res.redirect("/produkty/filtracne-telesa");
})

module.exports = router;