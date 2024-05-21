const mongoose = require('../../config/mongo.js');

const LivroSchema = mongoose.Schema({
    id: Number,
    titulo: String,
    Num_paginas: Number,
    isbn: String,
    editora: String

});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;