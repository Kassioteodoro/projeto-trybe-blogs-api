const { User } = require('../models');
const jwtFunctions = require('../auth/jwtFunctions');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  // console.log('resultado aqi', user);
  return user;
};

// getByEmail('MichaelSchumacher@gmail.com');

const getByEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  // console.log(user);
  return user;
};
// getByEmailAndPassword('MichaelSchumacher@gmail.com', '123456');

const getAll = async () => {
  const users = await User.findAll();
  const usersWithoutPassword = users.map((user) => {
  const { password, ...userWithoutPassword } = user.dataValues;
  return userWithoutPassword;
  });
  // console.log('aqui', usersWithoutPassword);
  return usersWithoutPassword;
};

// getAll();

const getById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return false;
  const { password, ...userWithoutPassword } = user.dataValues;
  // console.log('mano', userWithoutPassword);
  return userWithoutPassword;
};

// getById(1);

const postNewLogin = (email) => {
  const token = jwtFunctions.createNewToken({ email });
  return token;
};

const postNewUser = async (newUser) => {
  const user = await User.create(newUser);
  const { dataValues, null: id } = user;
  dataValues.id = id;
  const { password, ...userWithoutPassword } = dataValues;
  const token = jwtFunctions.createNewToken(userWithoutPassword);
  // console.log(1, dataValues, userWithoutPassword);
  // console.log(2, token);
  return token;
};

// postNewUser({
  // displayName: 'Brett Wiltshire',
  // email: 'brett@email.com',
  // password: '123456',
  // image: 'http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png',
// });

module.exports = {
  getByEmail,
  getByEmailAndPassword,
  postNewLogin,
  postNewUser,
  getAll,
  getById,
};