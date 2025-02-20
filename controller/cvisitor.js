const visitor = require("../model/visitor");

const getVisitors = async (req, res) => {
  const visit = await visitor.getVisitors();
  res.render("visitor", { visit });
};

const getVisitorOne = async (req, res) => {
  const visit = await visitor.getOne(req.params.id);
  res.render("visitorOne", { visit });
};

// 등록
const createRow = async (req, res) => {
  const createData = await visitor.postData(req.body);
  res.send("200");
};

// 해당 id 삭제
const deleteRow = async (req, res) => {
  await visitor.deleteData(req.params.id);
  res.send("200");
};

const moveWrite = async (req, res) => {
  const visit = await visitor.getOne(req.params.id);
  res.render("visitorWrite", { visit });
};

const dataUpdate = async (req, res) => {
  const visit = await visitor.updateRow(req.body);
  res.send("200");
};

module.exports = {
  getVisitors,
  getVisitorOne,
  createRow,
  deleteRow,
  moveWrite,
  dataUpdate,
};
