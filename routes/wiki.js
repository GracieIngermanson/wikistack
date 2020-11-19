const express = require("express");
const wiki = express.Router();
const main = require("../views/main");
const addPage = require("../views/addPage");

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

wiki.post("/", (req, res, next) => {
  res.send("Post submitted.");
});

module.exports = wiki;
