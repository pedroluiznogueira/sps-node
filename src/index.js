const express = require('express');
const bodyParser = require('body-parser');
const User = require('./app/models/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/userController')(app);

app.listen(3000);