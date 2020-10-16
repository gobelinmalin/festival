const express = require('express');
const router = express.Router();

const accomodations = require('./accomodations');
const advices = require('./advices');
const artists = require('./artists');
const events = require('./events');
const festivals = require('./festivals');
const styles = require('./styles');
const tickets = require('./tickets');


router.use('/accomodations', accomodations);
router.use('/advices', advices);
router.use('/artists', artists);
router.use('/events', events);
router.use('/festivals', festivals);
router.use('/styles', styles);
router.use('/tickets', tickets);


module.exports = router; 