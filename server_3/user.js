const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    contactNumber: {
        type: String,
        unique: true,
        require: true
    }
}, {collection: 'users', timestamps: true});

module.exports = mongoose.model('users', UserSchema);
