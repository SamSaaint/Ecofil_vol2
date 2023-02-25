if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const methodOverride = require("method-override");
const produktyRoutes = require("./routes/produkty");
const filtraciaRoutes = require("./routes/filtracia");
const userRoutes = require("./routes/users");

// express setup
const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const secret = "thisshouldbeabettersecret"; 

const sessionConfig = {
    name:"ourCustomCookieName", // default is connect.sid, change name to prevent injection
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(passport.initialize());
// passport.session always after regular session
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// database setup
mongoose.set("strictQuery",true);
mongoose.connect('mongodb://localhost:27017/ecofil', {
    useNewUrlParser: true,
    UseUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// locals middleware
app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
})

// complex routes
app.use("/produkty", produktyRoutes);
app.use("/filtracia-oleja", filtraciaRoutes);
app.use("/", userRoutes);

// home route
app.get("/", (req,res)=> res.render("home"));

//tribodiagnostika route
app.get("/tribodiagnostika", (req,res)=> res.render("tribodiagnostika"));

//vyuzitie route
app.get("/vyuzitie", (req,res)=> res.render("vyuzitie"));

//kontakt route
app.get("/kontakt", (req,res)=> res.render("kontakt"));

//download route
app.get("/download", (req,res)=> res.render("download"));

// server setup
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}.`));