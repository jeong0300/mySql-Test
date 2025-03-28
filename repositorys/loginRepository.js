const db = require("../models");

const getUser = async (userId) => {
  return await db.users.findOne({ where: { id: String(userId) } });
};

module.exports = { getUser };
