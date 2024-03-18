const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const teacherService = require('../services/teachers.service');

async function teacherByIdValidation(req, res, next) {
    try {
        const { teacherId } = req.params;

        if (!ObjectId.isValid(teacherId)) {
            throw createError.BadRequest("Teacher id is not valid");
        }

        const teacher = await teacherService.findById(teacherId);

        if (!teacher) {
            throw createError.NotFound("Teacher with such id not found");
        }

        next();
    } catch(err) {
        next(err);
    }
};

module.exports = {
    teacherByIdValidation,
};