const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#D3D3D3',
    },
}, {timestamps: true} );

module.exports = mongoose.model('Note', noteSchema)
