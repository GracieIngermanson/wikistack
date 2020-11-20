const express = require("express");
const users = express.Router();
const main = require("../views/main");
const userList = require("../views/userList");
const userPages = require('../views/userPages')
const { db, Page, User } = require("../models/index");

users.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(userList(allUsers));
  } catch (error) {
    next(error);
  }
});

users.get('/:userName', async (req, res, next) => {
  try {
    const user = await User.findOne( {
      where: {name: req.params.userName}
    });
    if (!user) {
      res.redirect('/users');
    }
    const pages = await Page.findAll({
      where: {authorId: user.id}
    });
    res.send(userPages(user, pages));
  } catch (error) {
    next(error);
  }
});




module.exports = users;
