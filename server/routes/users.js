const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/default.json");
const {check, validationResult} = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");

router.post(
    "/create_user",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Email is invalid").isEmail(),
        check("password", "Password must be at least 6 characters").isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({errors: errors.array()});
        }

        const {name, email, password} = req.body;

        try {
            let user = await User.findOne({email});

            if (user) {
                return res
                    .status(400)
                    .json({msg: "User already exists"});
            }

            user = new User({
                name,
                email,
                password,
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            jwt.sign(
                user.id,
                config.jwtSecret,
                {expiresIn: 36000},
                (err, token) => {
                    if (err) throw err;
                    res.json({token});
                }
            );
        } catch (err) {
            res.status(500).send("Server Error");
        }
    }
);

router.delete("/delete_user", auth, async (req, res) => {
    await User.findByIdAndRemove({_id: req.user.id});
    res.json({msg: "User Deleted!"});
});

module.exports = router;
