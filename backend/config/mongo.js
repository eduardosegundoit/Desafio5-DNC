const mangoose = require('mongoose');
mangoose.connect('mongodb://localhost:27017/local');

module.exports = mangoose;