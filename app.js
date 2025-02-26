const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const indexRouter = require("./routes/indes");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser);

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/visitor", indexRouter);

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
