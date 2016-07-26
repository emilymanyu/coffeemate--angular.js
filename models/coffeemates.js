var mongoose = require('mongoose');

var CoffeemateSchema = new mongoose.Schema({
    name : String,
    amount: Number,
    upvotes: {type: Number, default: 0}
});

module.exports = mongoose.model('Coffeemate', CoffeemateSchema);