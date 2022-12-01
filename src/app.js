const express = require('express');

const router = require('./router');

// ...

const app = express();

app.use(express.json());

app.use('/login', router.userRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
