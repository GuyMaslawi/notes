const express = require('express');
const router = express.Router();

router.post('/', [
    check('name', 'Name is required').not().isEmpty()
], (req, res) => {
    console.log(req.body)
    res.send("users")
})

module.exports = router;
