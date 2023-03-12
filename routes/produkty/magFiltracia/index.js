const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("../views/produkty/magFiltracia", {title:"Magnetická filtrácia"})
})

router.get("/magneticky-separator",(req,res)=>{
    res.render("../views/produkty/magFiltracia/magSeparator", {title:"Magnetický separátor"})
})

router.get("/magneticky-filter",(req,res)=>{
    res.render("../views/produkty/magFiltracia/magFilter", {title:"Magnetický filter"})
})

module.exports = router;