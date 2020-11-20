const express = require("express");
const wiki = express.Router();
const main = require("../views/main");
const addPage = require("../views/addPage");
const wikipage = require('../views/wikipage')
const { db, Page, User } = require("../models/index");

wiki.get("/", async (req, res, next) => {
  try {
    pages = await Page.findAll();
    res.send(main(pages));
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

wiki.get('/:slug', async (req, res, next) => {
  try {
    const slugPage = await Page.findOne( {
      where: {slug: req.params.slug}
    });
    const author = await slugPage.getAuthor();
    res.send(wikipage(slugPage, author));
  } catch (error) {
    next(error);
  }
});

wiki.post("/", async (req, res, next) => {
  //res.json(req.body);
  try {
    // See if someone has posted previously using the given email
    // Recall that emails are unique
    let user = await User.findOrCreate({
      where: {name: req.body.author, email: req.body.email}
    });
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      slug: req.body.title,
      authorId: user[0].id
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

module.exports = wiki;
