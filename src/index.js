const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express'), swaggerDocument = require('../swagger.json');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
require('./app/controllers/index')(app);

app.listen(3000);