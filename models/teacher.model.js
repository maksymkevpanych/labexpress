const { Schema, model } = require('mongoose');

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    room: {
        type: Number,
        required: true
    },
    courses: {
        type: [String],
        required: true
    },
}, {
    timestamps: true,
});

module.exports = model('teacher', teacherSchema);