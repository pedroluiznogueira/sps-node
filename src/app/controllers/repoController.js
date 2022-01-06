const express = require("express");
const authMiddleware = require('../middlewares/auth');

const router = express.Router();
router.use(authMiddleware);

router.get('/', async (req, res) => {
    return res.send({ message: 'middleware working fine'})
});

module.exports = app => app.use('/repos', router);