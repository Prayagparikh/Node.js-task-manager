const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    // type, required... all other things are Validators, to validate the user's post request in req.body
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [30, "name cannot be more than 30 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)