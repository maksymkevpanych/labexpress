const teacherService = require('../services/teachers.service');
const createError = require('http-errors');

async function createTeacher(req, res, next) {
    try {
       const newTeacher = await teacherService.create(req.body);

        res.status(200).json({
            status: 200,
            data: newTeacher,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

async function getTeachers(req, res, next) {
    try {
        res.status(200).json({
            status: 200,
            data: await teacherService.find(),
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

async function getTeacher(req, res, next) {
    try {
        const { teacherId } = req.params;
        const teacher = await teacherService.findById(teacherId);

        if (!teacher) {
            return res.status(400).json({
                status: 400,
                error:{ message: 'Teacher not found.'},
            });
        }

        res.status(200).json({
            status: 200,
            data: teacher,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

async function updateTeacher(req, res, next) {
    try {
        const { teacherId } = req.params;
        const teacherData = req.body;
        await teacherService.findByIdAndUpdate(teacherId, teacherData);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

async function deleteTeacher(req, res, next) {
    try {
        const { teacherId } = req.params;
        await teacherService.findByIdAndDelete(teacherId);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

module.exports = {
    createTeacher,
    getTeachers,
    getTeacher,
    updateTeacher,
    deleteTeacher,
};