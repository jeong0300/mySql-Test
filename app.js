const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const indexRouter = require("./routes/indes");
const loginRouter = require("./routes/login");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/visitor", indexRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  console.log("이동");
  res.render("index");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
