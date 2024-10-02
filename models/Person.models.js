const mongoose = require('mongoose')

// Define the Person Schema 
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['manager', 'chef', 'waiter'],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number
    }
})

const Person = mongoose.model('Person',personSchema)

module.exports = Person;