const Joi = require('joi');

const TeacherSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(100),

    position: Joi.string()
        .min(2)
        .max(60),

    degree: Joi.string()
        .min(2)
        .max(60),

    room: Joi.number()
        .min(0)
        .max(1000),

    courses: Joi.array()
});

module.exports = {
    TeacherSchema
};