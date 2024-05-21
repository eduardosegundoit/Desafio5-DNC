const mongoose = require('../../config/mongo.js');

const deleteSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Delete = mongoose.model('Delete', deleteSchema);

module.exports = Delete;