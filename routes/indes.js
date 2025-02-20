const express = require("express");
const router = express.Router();
const cvisitor = require("../controller/cvisitor");

router.post("/post/test", cvisitor.createRow);

router.get("/main", cvisitor.getVisitors);
router.get("/detail/:id", cvisitor.getVisitorOne);
router.get("/write/:id", cvisitor.moveWrite);

router.delete("/delete/:id", cvisitor.deleteRow);

router.put("/update", cvisitor.dataUpdate);

module.exports = router;
