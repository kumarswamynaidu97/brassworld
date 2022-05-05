const mongoose = require('mongoose');

const wallDecorSchema = new mongoose.Schema({
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

const Walldecor = mongoose.model('Walldecor', wallDecorSchema);

module.exports = Walldecor; 