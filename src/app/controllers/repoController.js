const express = require("express");
const authMiddleware = require('../middlewares/auth');
const User = require("../models/user");

const router = express.Router();
router.use(authMiddleware);

router.post('/add/:id', async (req, res) => {
    try {
        const { email, repos } = req.body;
        const id = req.params.id;

        const user = await User.findById({ _id:id });
        repos.map(repo => user.repos.push(repo));
        const upd = await User.findByIdAndUpdate(user.id, user);

        res.send({status: 200, message: 'succesfully updated', upd: upd});

    } catch (err) {
        return res.status(404).send({status: 404, message: 'failed to update', error: err.message});
    }
});

router.get('/find/all/:id', async function (req, res) {
    const id = req.params.id;

    const user = await User.findById({ _id:id });
    return res.send({ repos: user.repos });
});

module.exports = app => app.use('/repos', router);