const visitor = require("../repositorys/visitorRepository");

const getVisitors = async (req, res) => {
  const visit = await visitor.getVisitors();
  res.render("visitor", { visit });
};

const getVisitorOne = async (req, res) => {
  const visit = await visitor.getOne(req.params.id);
  res.render("visitorOne", { visit: visit.dataValues });
};

// 등록
const createRow = async (req, res) => {
  await visitor.postData(req.body);
  res.send("200");
};

// 해당 id 삭제
const deleteRow = async (req, res) => {
  await visitor.deleteData(req.params.id);
  res.send("200");
};

// 수정 페이지로 이동
const moveWrite = async (req, res) => {
  const visit = await visitor.getOne(req.params.id);
  // console.log(visit);
  res.render("visitorWrite", { visit });
};

// 수정 후 등록
const dataUpdate = async (req, res) => {
  await visitor.updateRow(req.body);
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
