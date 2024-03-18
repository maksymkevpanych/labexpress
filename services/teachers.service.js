const teacherModel = require('../models/teacher.model');

async function create(teacher) {
    return teacherModel.create(teacher);
}

async function find() {
    return {
        items: await teacherModel.find(),
        count: await teacherModel.countDocuments(),
    }
}

async function findById(id) {
    return teacherModel.findById(id);
}

async function findByIdAndUpdate(id, update) {
    return teacherModel.findByIdAndUpdate(id, update, { upsert: false, new: true });
};

async function findByIdAndDelete(id) {
    return teacherModel.findByIdAndDelete(id);
};

async function findOne(filter) {
    return teacherModel.findOne(filter);
};

module.exports = {
    create,
    find,
    findById,
    findByIdAndUpdate,
    findByIdAndDelete,
    findOne
};