const mysql = require("mysql2/promise");

// DB 연결
const pool = mysql.createPool({
  host: "localhost", // DB가 설치된 호스트 IP주소
  user: "root", // DB 접속 유저 이름
  password: "111111", // DB 접속 비밀번호
  database: "user", // DB 이름
});

const getVisitors = async () => {
  const query = "SELECT * FROM users";
  const [rows] = await pool.query(query);
  // console.log("전체", rows);
  return rows;
};

// 해당 데이터 하나만
const getOne = async (userId) => {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  const [rows] = await pool.query(query);
  // console.log("한 명", rows);
  return rows;
};

// 등록하기
const postData = async (data) => {
  try {
    const query = `INSERT INTO users (userid, name, comment) VALUES (?, ?, ?)`;
    await pool.query(query, [data.userid, data.name, data.comment]);

    return "데이터가 등록되었습니다.";
  } catch (error) {
    console.error("데이터 삽입 오류:", error);
    return "데이터 등록에 실패했습니다.";
  }
};

// 해당 로우 삭제하기
const deleteData = async (id) => {
  const query = `DELETE FROM users WHERE id = ?`;
  try {
    await pool.query(query, [id]);
    console;
  } catch (e) {
    console.log(e);
  }
};

// 해당 아이디를 가진 데이터 수정
const updateRow = async (data) => {
  const query = `UPDATE users SET name = ?, comment = ? WHERE id = ?`;
  try {
    await pool.query(query, [data.name, data.comment, Number(data.id)]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getVisitors, getOne, postData, deleteData, updateRow };
