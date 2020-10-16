const express = require("express");
const router = express.Router();
const connection = require("../config");

// Retrieve all artist
router.get("/", (req, res) => {
  connection.query("SELECT * FROM artist", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve style of artist
router.get("/:idArtist/style", (req, res) => {
  const idParams = req.params.idArtist;
  connection.query(
    "SELECT s.name FROM artist as a INNER JOIN style as s ON a.id_style = s.idstyle WHERE a.idartist = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

// Retrieve all artists of one style
router.get("/style/:id", (req, res) => {
  const idParams = req.params.id;

  connection.query("SELECT * FROM artist as a WHERE id_style = ?", idParams, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve an artist with name
router.get("/:name", (req, res) => {
  const nameParams = req.params.name;
  connection.query("SELECT * FROM artist WHERE name = ?", nameParams, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve an artist with id
router.get("/id/:id", (req, res) => {
  const nameParams = req.params.id;
  connection.query("SELECT * FROM artist WHERE idartist = ?", nameParams, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve all festival for an artist with is id
router.get("/:idArtist/festival", (req, res) => {
  const idParams = req.params.idArtist;

  connection.query(
    "SELECT f.idfestival, f.name, f.description, f.startDate, f.image1, f.image2, f.image3, f.image4, f.url_video, f.city, f.country, f.endDate FROM festival as f INNER JOIN artist_festival as af INNER JOIN artist as a ON f.idfestival = af.id_festival AND a.idartist = af.id_artist WHERE af.id_artist = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

// Create an artist

router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO artist SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify an artist with idartist

router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query("UPDATE artist SET ? WHERE idartist = ?", [formData, idUrl], (err) => {
    if (err) {
      res.status(500).send("Error editing");
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete an artist with idartist

router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM artist WHERE idartist = ?", [idUrl], (err) => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
