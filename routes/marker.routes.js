const express = require('express');
const router = express.Router();
const marker = require('../controllers/marker.controller');

// Create a new Marker
router.post('/markers', marker.create);

// Retrieve all Marker
router.get('/markers', marker.findAll);

// Retrieve a single Marker with markerId
router.get('/markers/:markerId', marker.findOne)
module.exports = router;


    
    // // Retrieve a single Marker with markerId
    // app.get('/markers/:markerId', notes.findOne);

    // // Update a marker with markerId
    // app.put('/markers/:markerId', notes.update);

    // // Delete a Marker with markerId
    // app.delete('/markers/:markerId', notes.delete);