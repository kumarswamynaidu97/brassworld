const mongoose = require('mongoose');

const diyaLaternSchema = new mongoose.Schema({
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

const Diyalatern = mongoose.model('Diyalatern', diyaLaternSchema);

module.exports = Diyalatern; 