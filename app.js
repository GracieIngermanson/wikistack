const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const layout = require("./views/layout");

const staticMiddleware = express.static(path.join(__dirname, "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(staticMiddleware);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(layout("hello"));
});

app.listen(3000);
