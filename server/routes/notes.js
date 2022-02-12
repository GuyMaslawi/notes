const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Note = require("../models/Note");

router.post(
  "/create-note",
  [
    check("title", "Title is required").not().isEmpty(),
    check("description", "Description is Required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Note.create(req.body, (err, data) => {
        if (err) {
          return res.status(500).send("Server Error");
        } else {
          res.send("Note Created");
          data.save();
        }
      });
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);

router.get("/user/:id", async (req, res) => {
  try {
    const notes = await Note.find({ user: req.params.id });

    if (!notes)
      return res.status(400).json({ msg: "There is no notes for this user" });

    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
