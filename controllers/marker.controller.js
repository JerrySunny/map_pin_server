const _ = require('lodash');
const Marker = require('../models/markers.model');

// Create and Save a new Marker
const create = async (req, res, next) => {
    try {
        // Validate request
        if (!req.body || _.isEmpty(req.body)) {
            const error = new Error("Marker content can not be empty");
            next(error);
        }
        // Create a Marker
        const marker = new Marker({
            title: req.body.title || "Untitled Marker",
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        // Save Marker in the database
        const newMarker = await marker.save();
        res.send(newMarker);
    }
    catch (error) {
        next(error);
    }
};

// Retrieve and return all markers from the database.
const findAll = async (req, res, next) => {
    try {
        const markers = await Marker.find();
        res.send(markers);
    }
    catch (error) {
        next(error);
    }
};  

const findOne = async (req, res, next) => {
    try {

        const marker = await Marker.findById(req.params.markerId);
        console.log(marker);
        if (!marker) {
            const error = new Error("marker not found with id " + req.params.markerId);
            next(error);
        }
        res.send(marker);
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    findAll,
    findOne
}