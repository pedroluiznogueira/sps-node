const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body); 
        return res.status(301).send({
            status: 301,
            message: 'user created', 
            user: user
        }); 
    } catch (err) {
        return res.status(404).send({ 
            status: 404,
            message: 'failed to create user',
            error: err.message
        });
    }
});

// base request mapping for user controller
module.exports = app => app.use('/users', router); 