const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const { errorHandler } = require('../middlewares');
const routes = require('../modules/routes');

const app = express();

app.use(cors({ origin: RegExp('/*/'), credentials: true }));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.use(errorHandler);

module.exports = app;