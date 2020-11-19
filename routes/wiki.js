const express = require("express");
const wiki = express.Router();
const main = require("../views/main");
const addPage = require("../views/addPage");
const { db, Page, User } = require("../models/index");

wiki.get("/", (req, res, next) => {
  try {
    res.send("Get Wiki successful");
  } catch (error) {
    next(error);
  }
});

wiki.get("/add", (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    next(error);
  }
});

wiki.post("/", async (req, res, next) => {
  //res.json(req.body);
  try {
    //const urlifyTitle = req.body.title.trim().split(" ").join("%20");
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      slug: req.body.title,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = wiki;
