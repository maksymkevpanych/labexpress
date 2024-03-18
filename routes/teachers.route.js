const express = require('express');
const router = express.Router();

const controller = require('../controllers/teachers.controller');

router.route('/')
    .get(controller.getTeachers)
    .post(controller.createTeacher);

router.route('/:teacherId')
    .get(controller.getTeacher)
    .patch(controller.updateTeacher)
    .delete(controller.deleteTeacher);

module.exports = router;