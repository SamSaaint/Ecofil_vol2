const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("../views/filtracia/index")
});

router.get("/by-pass-filtracia",(req,res)=>{
    res.render("../views/filtracia/by-pass-filtracia")
});

router.get("/predlzenie-zivotnosti-oleja",(req,res)=>{
    res.render("../views/filtracia/predlzenie-zivotnosti-oleja")
});

router.get("/kontaminacia-oleja",(req,res)=>{
    res.render("../views/filtracia/kontaminacia-oleja")
});

router.get("/filtracia-vseobecne",(req,res)=>{
    res.render("../views/filtracia/filtracia-vseobecne")
});

router.get("/nova-generacia-filtracie",(req,res)=>{
    res.render("../views/filtracia/nova-generacia-filtracie")
});

router.get("/povrchova-filtracia",(req,res)=>{
    res.render("../views/filtracia/povrchova-filtracia")
});

router.get("/hlbkova-filtracia",(req,res)=>{
    res.render("../views/filtracia/hlbkova-filtracia")
});

router.get("/ucinnost-filtracie",(req,res)=>{
    res.render("../views/filtracia/ucinnost-filtracie")
});

module.exports = router;