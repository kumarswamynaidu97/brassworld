const mongoose = require('mongoose');

const handicraftsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true,
        min: 0
    },
    url: {
        type: String,
        required: true
    }
});

const Handicrafts = mongoose.model('Handicrafts', handicraftsSchema);

module.exports = Handicrafts; 