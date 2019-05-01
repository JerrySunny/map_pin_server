const mongoose = require('mongoose');
const MarkerSchema = mongoose.Schema({
    title: String,
    latitude: Number,
    longitude: Number
}, {
        timestamps: true
    });

module.exports = mongoose.model('Marker', MarkerSchema);