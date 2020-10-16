const express = require("express");
const router = express.Router();
const connection = require("../config");

// Retrieve all advices
router.get("/", (req, res) => {
  connection.query("SELECT * FROM advice", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve an advice with id
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query("SELECT * FROM advice WHERE idadvice = ?", idParams, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Create an advice

router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO advice SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify an advice with idadvice

router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query("UPDATE advice SET ? WHERE idadvice = ?", [formData, idUrl], (err) => {
    if (err) {
      res.status(500).send("Error editing");
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete an advice with idadvice

router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM advice WHERE idadvice = ?", [idUrl], (err) => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
