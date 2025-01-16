const mongoose = require("mongoose");

const svgSchema = new mongoose.Schema({
    shape: {
        type: String,
        required: true
    },
    rectangle: {
        type: Array,
        required: true
    },
    dotPosition: {
        type: Array,
        required: true
    },
    offset: {
        type: Object,
        required: true
    },
    img: {
        type: String,
        required: true,
    }
})

const moduleSvg = new mongoose.model('svg_collection', svgSchema);
module.exports = moduleSvg