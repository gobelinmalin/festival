const express = require("express");
const router = express.Router();
const connection = require("../config");

// Retrieve all event
router.get("/", (req, res) => {
  connection.query("SELECT * FROM event", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Create an event

router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO event SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify an event with idevent

router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query("UPDATE event SET ? WHERE idevent = ?", [formData, idUrl], (err) => {
    if (err) {
      res.status(500).send("Error editing");
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete an event with idevent

router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM event WHERE idevent = ?", [idUrl], (err) => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
