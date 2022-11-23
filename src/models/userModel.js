const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    }, 

    Password: {
        type: String,
        required: true
    },
},{
    timestamp: true 
})
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;