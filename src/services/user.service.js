const { User } = require('../models');
const jwtFunctions = require('../auth/jwtFunctions');

// const getByEmail = async (email) => {
  // const user = await User.findOne({ where: { email } });
  // console.log(user);
  // return user;
// };

// getByEmail('kassio@gemail.com');

const getByEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  // console.log('resultado aqui', user);
  return user;
};

getByEmailAndPassword('lewishamilton@gmail.com', '123456');

const postNewLogin = (email) => {
  // await User.create({ email, password });
  const token = jwtFunctions.createNewToken({ email });
  // console.log(1, user);
  // console.log(2, token);
  return token;
};

// postNewLogin('kassio@gemail.com', '123455');

const postNewUser = async (newUser) => {
  await User.create(newUser);
  const { _password, ...userWithoutPassword } = newUser;
  const token = jwtFunctions.createNewToken(userWithoutPassword);
  // console.log(1, user);
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
  getByEmailAndPassword,
  postNewLogin,
  postNewUser,
};