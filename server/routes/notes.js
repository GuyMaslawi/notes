const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");
const Note = require("../models/Note");

router.post(
    "/create",
    [
        check("title", "Title is required").not().isEmpty(),
        check("description", "Description is Required").not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {user, title, description} = req.body;

        try {
            const newNote = new Note({
                user,
                title,
                description
            });

            const note = await newNote.save();

            res.json(note);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
    }
);

router.delete('/delete/:id', async (req, res) => {
    try {
        await Note.findOneAndDelete({_id: req.params.id});
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});

router.get("/byUser/:id", async (req, res) => {
    try {
        const notes = await Note.find({user: req.params.id});
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

















