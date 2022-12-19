const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const produktyRoutes = require("./routes/produkty");
const filtraciaRoutes = require("./routes/filtracia");

// express setup
const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

// complex routes
app.use("/produkty", produktyRoutes);
app.use("/filtracia-oleja", filtraciaRoutes);

// home route
app.get("/", (req,res)=> res.render("home"));

//tribodiagnostika route
app.get("/tribodiagnostika", (req,res)=>{
    res.render("tribodiagnostika");
})

//vyuzitie route
app.get("/vyuzitie", (req,res)=>{
    res.render("vyuzitie");
})

//kontakt route
app.get("/kontakt", (req,res)=>{
    res.render("kontakt");
})

//download route
app.get("/download", (req,res)=>{
    res.render("download");
})

// server setup
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}.`));