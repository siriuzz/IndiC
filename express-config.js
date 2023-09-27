const express = require('express')
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', router);

module.exports = { router, port };