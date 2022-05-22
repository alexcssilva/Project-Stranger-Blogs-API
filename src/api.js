const express = require('express');
const router = require('./database/router/index');
// ...

const app = express();

app.use(express.json());

app.use(router);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
