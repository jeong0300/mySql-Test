const users = require("../repositorys/loginRepository");

const getUsers = async (req, res) => {
  const user = await users.getUsers();
  res.render("main", { user });
};

module.exports = { getUsers };
