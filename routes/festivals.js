const express = require("express");
const router = express.Router();
const connection = require("../config");

// Retrieve all festival
router.get("/", (req, res) => {
  connection.query("SELECT * FROM festival", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Retrieve one festival
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query(
    "SELECT * FROM festival WHERE idfestival = ?",
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

// Retrieve all festival for on country
router.get("/country/:name", (req, res) => {
  const nameParams = req.params.name;

  connection.query(
    "SELECT * FROM festival WHERE festival.country = ?",
    nameParams,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

// Create an festival

router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO festival SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify an festival with idfestival

router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    "UPDATE festival SET ? WHERE idfestival = ?",
    [formData, idUrl],
    err => {
      if (err) {
        res.status(500).send("Error editing");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Retrieve all style of one festival
router.get("/:idFestival/style", (req, res) => {
  const idParams = req.params.idFestival;

  connection.query(
    "SELECT s.name, s.id_style FROM festival as f INNER JOIN style as s INNER JOIN festival_style as fs ON f.idfestival = fs.id_festival AND s.idstyle = fs.id_style WHERE fs.id_festival = ?",
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

// Retrieve all festival of one style
router.get("/style/:name", (req, res) => {
  const nameParams = req.params.name;

  connection.query(
    "SELECT f.idfestival, f.name, f.description, f.startdate, f.image1, f.image2, f.image3, f.image4, f.url_video, f.city, f.country, f.endDate FROM festival as f INNER JOIN style as s INNER JOIN festival_style as fs ON f.idfestival = fs.id_festival AND s.idstyle = fs.id_style WHERE s.name = ?",
    nameParams,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

// Retrieve all festival of one date
router.get("/date/:date", (req, res) => {
  const dateParams = req.params.date;

  connection.query(
    "SELECT * FROM festival WHERE festival.startDate = ?",
    dateParams,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

// Retrieve all artist of one festival
router.get("/:idFestival/artists", (req, res) => {
  const idParams = req.params.idFestival;

  connection.query(
    "SELECT a.idartist, a.name, a.image_url, a.tracker_count, a.music_url, a.description, a.country, a.id_style, a.embed_video FROM festival as f INNER JOIN artist as a INNER JOIN artist_festival as af ON f.idfestival = af.id_festival AND a.idartist = af.id_artist WHERE af.id_festival = ?",
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

// Retrieve all accomodation of one festival
router.get("/:idFestival/accomodation", (req, res) => {
  const idParams = req.params.idFestival;

  connection.query(
    "SELECT a.namePackage, a.type, a.soldOut, a.passPrice, a.priceByNight, a.price, a.date, a.namePass, a.nameAccomodation, a.hour, a.image1, a.image2, a.image3, a.image4, a.numberPlace, a.priceplace, a.km, a.placeAvailable   FROM festival as f INNER JOIN accomodation as a INNER JOIN accomodation_festival as af ON f.idfestival = af.id_festival AND a.idaccomodation = af.id_accomodation WHERE af.id_festival = ?",
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

// Delete an festival with idevent

router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query(
    "DELETE FROM festival WHERE idfestival = ?",
    [idUrl],
    err => {
      if (err) {
        res.status(500).send("Error deleting");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Link between artist and festival

router.post("/:idFestival/artists/:idArtist", (req, res) => {
  const id_festival = req.params.idFestival;
  const id_artist = req.params.idArtist;

  connection.query(
    "INSERT INTO artist_festival SET ?",
    {id_festival, id_artist},
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Modify Link between artist and festival

router.put("/:idFestival/artists/:idArtist", (req, res) => {
  const id_festival = req.params.idFestival;
  const id_artist = req.params.idArtist;

  const formData = req.body;

  connection.query(
    "UPDATE artist_festival SET ? WHERE id_festival = ? AND id_artist = ?",
    [formData, id_festival, id_artist],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Link between style and festival

router.post("/:idFestival/styles/:idStyle", (req, res) => {
  const id_festival = req.params.idFestival;
  const id_style = req.params.idStyle;

  connection.query(
    "INSERT INTO festival_style SET ?",
    {id_festival, id_style},
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Modify Link between style and festival

router.put("/:idFestival/styles/:idStyle", (req, res) => {
  const id_festival = req.params.idFestival;
  const id_style = req.params.idStyle;

  const formData = req.body;

  connection.query(
    "UPDATE festival_style SET ? WHERE id_festival = ? AND id_style = ?",
    [formData, id_festival, id_style],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Link between accomodation and festival

router.post("/:idFestival/accomodations/:idAccomodation", (req, res) => {
  const id_festival = req.params.idFestival;
  const id_accomodation = req.params.idAccomodation;

  connection.query(
    "INSERT INTO accomodation_festival SET ?",
    {id_festival, id_accomodation},
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Modify Link between accomodation and festival

router.put("/:idFestival/accomodations/:idAccomodation", (req, res) => {
  const id_festival = req.params.idFestival;
  const id_accomodation = req.params.idAccomodation;

  const formData = req.body;

  connection.query(
    "UPDATE accomodation_festival SET ? WHERE id_festival = ? AND id_accomodation = ?",
    [formData, id_festival, id_accomodation],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
