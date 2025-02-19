const express = require("express");
const router = express.Router();
const cvisitor = require("../controller/cvisitor");

router.get("/main", cvisitor.getVisitors);
router.get("/detail/:id", cvisitor.getVisitorOne);
router.post("/post/test", cvisitor.createRow);

module.exports = router;
