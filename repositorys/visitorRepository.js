const db = require("../models");

const getVisitors = async () => {
  return await db.visitor.findAll();
};

const getOne = async (userId) => {
  return await db.visitor.findOne({ where: { id: Number(userId) } });
};

const postData = async (data) => {
  try {
    // 삽입
    await db.visitor.create({
      userId: data.userid,
      name: data.name,
      comment: data.comment,
    });

    return "데이터가 등록되었습니다.";
  } catch (error) {
    console.error("데이터 삽입 오류:", error);
    return "데이터 등록에 실패했습니다.";
  }
};

const deleteData = async (id) => {
  try {
    await db.visitor.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
  }
};

const updateRow = async (data) => {
  try {
    await db.visitor.update(
      { name: data.name, comment: data.comment },
      { where: { id: data.id } }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getVisitors, getOne, postData, deleteData, updateRow };
