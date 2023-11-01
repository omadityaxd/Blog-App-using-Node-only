const express = require("express");
const route = express.Router();
const Blog = require("../models/blog");
const blogControllers = require("../controllers/blogControllers");

route.get("/", blogControllers.blog_index);
route.get("/create", blogControllers.blog_create_get);
route.post("/", blogControllers.blog_create_post);
route.get("/:id", blogControllers.blog_details);
route.delete("/:id", blogControllers.blog_delete);

module.exports = route;
