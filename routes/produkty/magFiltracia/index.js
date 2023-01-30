const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("../views/produkty/magFiltracia")
})

router.get("/magneticky-separator",(req,res)=>{
    res.render("../views/produkty/magFiltracia/magSeparator")
})

router.get("/magneticky-filter",(req,res)=>{
    res.render("../views/produkty/magFiltracia/magFilter")
})

module.exports = router;