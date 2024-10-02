const mongoose = require('mongoose')

const menuItemSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        default: 50,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet','sour','spicy']
    },
    is_drink: {
        type: Boolean,
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_Sale: {
        type: Number,
        default: 0
    }
})

const MenuItem = mongoose.model('Menu', menuItemSchema)

module.exports = MenuItem;
