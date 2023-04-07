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
const dbUrl = process.env.MONGO_DB_URL;
const dbUrlLocal = 'mongodb://localhost:27017/ecofil';
const MongoStore = require('connect-mongo');

// express setup
const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const secret = "thisshouldbeabettersecret";

const store = MongoStore.create({
    //mongoUrl name of the key is mandatory, otherwise client init error 
    mongoUrl:dbUrl,
    secret:"mydogisquiteoldbutbehaveslikeapup",
    touchAfter: 24*60*60
});

const sessionConfig = {
    store,
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
mongoose.connect(dbUrl, {
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
app.get("/", (req,res)=> res.render("home", {title:"Ecofil - svetový líder v by-passovej filtrácií"}));

//tribodiagnostika route
app.get("/tribodiagnostika", (req,res)=> res.render("tribodiagnostika", {title:"Tribodiagnostika"}));

//vyuzitie route
app.get("/vyuzitie", (req,res)=> res.render("vyuzitie", {title:"Využitie"}));

//kontakt route
app.get("/kontakt", (req,res)=> res.render("kontakt", {title:"Kontakt"}));

//download route
app.get("/download", (req,res)=> res.render("download", {title:"Na stiahnutie"}));

// server setup
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}.`));