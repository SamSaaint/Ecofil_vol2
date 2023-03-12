const express = require("express");
const router = express.Router();
const filtracneTelesaRoutes = require("./filtracneTelesa");
const filtracneZariadeniaRoutes = require("./filtracneZariadenia");
const filtracneVlozkyRoutes = require("./filtracneVlozky");
const magFiltraciaRoutes = require("./magFiltracia");

router.use("/filtracne-telesa", filtracneTelesaRoutes);
router.use("/filtracne-zariadenia", filtracneZariadeniaRoutes);
router.use("/filtracne-vlozky", filtracneVlozkyRoutes);
router.use("/magneticka-filtracia", magFiltraciaRoutes);

router.get("/",(req,res)=>{
    res.render("../views/produkty/index", {title:"Produkty"})
});

router.get("/magneticka-filtracia",(req,res)=>{
    res.render("../views/produkty/magneticka-filtracia", {title:"Magnetická filtrácia"})
})

router.get("/analyza-oleja",(req,res)=>{
    res.render("../views/produkty/analyza-oleja", {title:"Analýza oleja"})
})

router.get("/aquameter",(req,res)=>{
    res.render("../views/produkty/aquameter", {title:"Aquameter"})
})

module.exports = router;