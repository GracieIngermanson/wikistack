const express = require("express");
const app = express();
const { db, Page, User } = require('./models');
const morgan = require("morgan");
const path = require("path");
const layout = require("./views/layout");
const PORT = 3000;

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const staticMiddleware = express.static(path.join(__dirname, "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(staticMiddleware);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(layout("hello"));
});

async function syncDb() {
  await db.sync();
  app.listen(PORT);
}

syncDb();


