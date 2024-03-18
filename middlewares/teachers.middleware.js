const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const teacherService = require('../services/teachers.service');
const {TeacherSchema} = require('../schemas/teachers.schema');

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

const teacherDataValidation = async(req, res, next) =>{
    try{
        const { error } = TeacherSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        const teacher = await teacherService.findOne({
            name: req.body.name
        });

        if (teacher) {
            throw createError.BadRequest("Teacher with such name already exist");
        }
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = {
    teacherByIdValidation,
    teacherDataValidation
};