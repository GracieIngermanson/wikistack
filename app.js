const express = require("express");
const app = express();
const { db, Page, User } = require("./models");
const morgan = require("morgan");
const path = require("path");
const layout = require("./views/layout");
const PORT = 3000;

db.authenticate().then(() => {
  console.log("connected to the database");
});

const staticMiddleware = express.static(path.join(__dirname, "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(staticMiddleware);
app.use(morgan("dev"));

app.use("/wiki", require("./routes/wiki"));
app.use("/users", require("./routes/users"));

app.get("/", (req, res) => {
  res.redirect('/wiki');
});

async function syncDb() {
  await db.sync();
 /*  // Change to
   await db.sync({force: true})
  // and run once to add association between tables*/
  app.listen(PORT);
}

syncDb();
