const express = require('express'),
    mongoose = require('mongoose');


const Walldecor = require('./models/Walldecor');
const Diyalatern = require('./models/DiyaLatern');
const Handicrafts = require('./models/Handicrafts');
const ContactUs = require('./models/ContactUs');

mongoose.connect('mongodb://localhost:27017/brass-world', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connection Success!!")
})
.catch(err => {
    console.log("MongoDB error ocured!!!!");
    console.log(err);
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/",(req,res)=> {
    res.render("index");
});

app.get("/walldecor",async (req,res)=> {
    const wallDecors = await Walldecor.find();
    res.render("wallDecor", { wallDecors });
});

app.get("/dialatern",async (req,res)=> {
    const diyaLaterns = await Diyalatern.find({});
    res.render("diaLatern", { diyaLaterns });
});

app.get("/handicrafts",async (req,res)=> {
    const handicrafts = await Handicrafts.find();
    res.render("handicrafts", { handicrafts });
});

app.get("/aboutus",(req,res)=> {
    res.render("aboutUs");
});

app.post("/aboutus",async (req, res) => {
    const newQuery = new ContactUs(req.body);
    await newQuery.save();
    console.log(newQuery);
    res.redirect("/aboutus");
});

app.get("*", (req, res) => {
    res.send("<h1>ERROR 404!!</h1><p>Page Not Found.</p>")
});

app.listen(4000, () => {
    console.log("Server started at port 4000!");
});