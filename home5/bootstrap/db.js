const mongoose = require('mongoose');
const cstring = 'mongodb+srv://bogdanveli:Origano123@zmaj-vpx7k.mongodb.net/fakultet?retryWrites=true&w=majority';
console.log(mongoose.connection.readyState);


const initDB = () => {
    mongoose.connect(cstring, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if(err){
            console.log('Could not connect to database');
            return;
        }
    });
}

module.exports = {
    initDB,
};