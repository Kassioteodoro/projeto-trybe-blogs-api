const { User } = require('../models');
const jwtFunctions = require('../auth/jwtFunctions');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  return user;
};

// getByEmail('kassio@gemail.com');

const postNewLogin = async (email, password) => {
  await User.create({ email, password });
  const token = jwtFunctions.createNewToken({ email });
  // console.log(1, user);
  // console.log(2, token);
  return token;
};

// postNewLogin('kassio@gemail.com', '123455');

module.exports = {
  getByEmail,
  postNewLogin,
};