const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        googleId: String,
        avatar: String,
        email: String,
        firstName: String,
        lastName: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
