const express = require("express");
const router = express.Router();
const connection = require("../config");

// Retrieve all accomodation
router.get("/", (req, res) => {
  connection.query("SELECT * FROM accomodation", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve an accomodation with id
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query("SELECT * FROM accomodation WHERE idaccomodation = ?", idParams, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve all accomodation for an festival with is id
router.get("/festival/:idFestival", (req, res) => {
  const idFestival = req.params.idFestival;

  connection.query(
    "SELECT a.namePackage, a.type, a.soldOut, a.passPrice, a.priceByNight, a.price, a.date, a.namePass, a.nameAccomodation, a.hour, a.image1, a.image2, a.image3, a.image4, a.numberPlace, a.pricePlace, a.description, a.placeAvailable, a.airbnb, a.km FROM accomodation as a INNER JOIN accomodation_festival as af INNER JOIN festival as f ON a.idaccomodation = af.id_accomodation AND f.idfestival = af.id_festival WHERE f.idfestival = ?",
    idFestival,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

// Create an accomodation

router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO accomodation SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify an accomodation with idaccomodation

router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query("UPDATE accomodation SET ? WHERE idaccomodation = ?", [formData, idUrl], (err) => {
    if (err) {
      res.status(500).send("Error editing");
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete an accomodation with idaccomodation

router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM accomodation WHERE idaccomodation = ?", [idUrl], (err) => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
