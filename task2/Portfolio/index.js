if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
};
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const ejsMate = require("ejs-mate");
const Contact = require('./model/coantact');
const session = require('express-session');
const flash = require('connect-flash');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

const dbUrl = process.env.ATLASBD_URL;
async function connectDB() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Database connected...");
    } catch (err) {
        console.error("Connection failed...", err);
    }
}
connectDB();

app.get('/', (req, res) => {

    res.render('index.ejs');
});
app.get('/about', (req, res) => {

    res.render('about.ejs');
});
app.get('/projects', (req, res) => {

    res.render('project.ejs');
});
app.get('/experiance', (req, res) => {

    res.render('experiance.ejs');
});
app.get('/contact', (req, res) => {

    res.render('contact.ejs');
});
app.post('/contact', async (req, res) => {
    let { name, email, message } = req.body;
    let newContact = new Contact({
        name,
        email,
        message,
        created_at: new Date()
    });
    try {
        let s = await newContact.save();
        req.flash('success_msg', 'Message sent successfully');
        res.redirect('/contact');
    } catch (error) {
        req.flash('error_msg', 'Failed to send message');
        res.redirect('/contact');
    };

});


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});