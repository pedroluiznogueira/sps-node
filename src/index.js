const express = require('express');
const bodyParser = require('body-parser');
const User = require('./app/models/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', async (req, res) => {
    try {
        const user = req.body;
        await User.create(user);
        return res.send({ message: 'created' });
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
});

app.listen(3000);