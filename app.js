const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/BlogRoutes");
const { result } = require("lodash");
// invoking express

const app = express();

//connecting to mongoDB

const dbURI =
  "mongodb+srv://netninjatestuser:test123@cluster0.q7qjrmn.mongodb.net/NinjasBlogsNode?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//setting view engine

app.set("view engine", "ejs");

//request

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes

app.use("/blogs", blogRoutes);

// 404 pages

//must be used in the end as it works like default case in switch case

//express follows top to bottom approach

//use fires for every single request but if that req gets matched to about geturls then it doesnt get fired

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
