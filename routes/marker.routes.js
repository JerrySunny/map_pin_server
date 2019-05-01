const express = require('express');
const router = express.Router();
const marker = require('../controllers/marker.controller');

// Create a new Marker
router.post('/markers', marker.create);

// Retrieve all Marker
router.get('/markers', marker.findAll);

// Retrieve a single Marker with markerId
router.get('/markers/:markerId', marker.findOne);

// Update a marker with markerId
router.put('/markers/:markerId', marker.update);

// Delete a Marker with markerId
router.delete('/markers/:markerId', marker.deleteMarker);
module.exports = router;
