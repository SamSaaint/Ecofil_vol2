const express = require("express");
const router = express.Router();
const zivTables = require("../../public/tdata/tdata");
const particles = require("../../public/particles-grid/particles");


router.get("/",(req,res)=>{
    res.render("../views/filtracia/index", {title:"Filtrácia oleja"})
});

router.get("/by-pass-filtracia",(req,res)=>{
    res.render("../views/filtracia/by-pass-filtracia", {title:"By-pass filtrácia"})
});

router.get("/predlzenie-zivotnosti-oleja",(req,res)=>{
    res.render("../views/filtracia/predlzenie-zivotnosti-oleja", { zivTables, particles, title:"Predĺženie životnosti oleja"})
});

router.get("/kontaminacia-oleja",(req,res)=>{
    res.render("../views/filtracia/kontaminacia-oleja", {title:"Kontaminácia oleja"})
});

router.get("/filtracia-vseobecne",(req,res)=>{
    res.render("../views/filtracia/filtracia-vseobecne", {title:"Filtrácia všeobecne"})
});

router.get("/nova-generacia-filtracie",(req,res)=>{
    res.render("../views/filtracia/nova-generacia-filtracie", {title:"Nová generácia filtrácie"})
});

router.get("/povrchova-filtracia",(req,res)=>{
    res.render("../views/filtracia/povrchova-filtracia", {title:"Povrchová filtrácia"})
});

router.get("/hlbkova-filtracia",(req,res)=>{
    res.render("../views/filtracia/hlbkova-filtracia", {title:"Hĺbková filtrácia"})
});

router.get("/ucinnost-filtracie",(req,res)=>{
    res.render("../views/filtracia/ucinnost-filtracie", {title:"Účinnosť filtrácie"})
});

module.exports = router;