const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

router.get("/register", (req,res)=>{
    res.render("users/register");
})

router.post("/register", async (req,res)=>{
    try {
        const {username, password} = req.body;
        const user = new User({ username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            res.redirect("/");
        })
    } catch (e) {
        res.redirect("/register");
    }
})

router.get("/login", (req,res)=>{
    res.render("users/login")
})

router.post("/login", passport.authenticate("local", { successRedirect:"/", failureRedirect: "/login" }));


router.get("/logout", (req,res)=>{
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
      });
});


module.exports = router;