const bcrypt = require("bcryptjs");
const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne( {email} ))
            return res.status(400).send({message: 'email already exists'})

        const user = await User.create(req.body); 

        // don't want to send password back
        user.password = undefined;

        return res.status(301).send({status: 301, message: 'user created', user: user}); 
    } catch (err) {
        return res.status(404).send({status: 404, message: 'failed to create user', error: err.message});
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // revert the select = false property in model
        const user = await User.findOne( {email} ).select('+password');
        if (!user)
            return res.status(404).send({ error: 'user not found'});

        // compare given password with the registered password
        const compare = await bcrypt.compare(password, user.password);
        if (!compare)
            return res.status(404).send({ error: 'invalid password'});

            return res.status(200).send({status: 200, message: 'user authenticated', user: user}); 
    } catch (err) {
        return res.status(404).send({status: 404, message: 'failed to authenticate', error: err.message});
    }
})

// base request mapping for user controller
module.exports = app => app.use('/users', router); 