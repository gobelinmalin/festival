const express = require("express");
const router = express.Router();
const connection = require("../config");

// Retrieve all tickets
router.get("/", (req, res) => {
  connection.query("SELECT * FROM ticket", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve an ticket for a festival
router.get("/festivals/:idFestival", (req, res) => {
  const idParams = req.params.idFestival;
  connection.query("SELECT * FROM ticket WHERE id_festival = ?", idParams, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve an ticket with id
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query("SELECT * FROM ticket WHERE idticket = ?", idParams, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Create an tickets

router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO ticket SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify an ticket with idtickets

router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query("UPDATE ticket SET ? WHERE idticket = ?", [formData, idUrl], (err) => {
    if (err) {
      res.status(500).send("Error editing");
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete an ticket with idtickets

router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM ticket WHERE idticket = ?", [idUrl], (err) => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
