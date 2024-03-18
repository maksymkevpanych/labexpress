const express = require('express');
const router = express.Router();

const controller = require('../controllers/teachers.controller');
const middleware = require('../middlewares/teachers.middleware');

router.route('/')
    .get(controller.getTeachers)
    .post(middleware.teacherDataValidation, controller.createTeacher);

router.route('/:teacherId')
    .get(middleware.teacherByIdValidation, controller.getTeacher)
    .patch(middleware.teacherByIdValidation, middleware.teacherDataValidation, controller.updateTeacher)
    .delete(middleware.teacherByIdValidation, controller.deleteTeacher);

module.exports = router;