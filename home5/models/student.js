const mongoose = require('mongoose');

const Student = mongoose.model(
    'studenti',
    {
        ime: String,
        index: Number,
        smer: String,
        krediti: Number
    },
    'studenti'
);

const readAll = () => {    // SE CITAAT SITE STUDNETI
    return new Promise((success, fail) => {
        Student.find({}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const createNew = (data) => {     // SE PRAVI EDEN NOV STUDENT
    return new Promise((success, fail) => {
        let p = new Student(data);
        p.save((err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const remove = (id) => {    // SE BRISHE STUDENT 1 spored indeks
    return new Promise((success, fail) => {
        Student.deleteOne({_id: id}, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

module.exports = {
    readAll,
    createNew,
    remove
};