const mongoose = require('mongoose');

//Schema du json

const gamesSchema = new  mongoose.Schema({
    id: { type: mongoose.SchemaTypes.ObjectId},
    name: {type: String, trim:true},
    platform: {type: String, trim:true},
    description: {type: String, trim:true},
    price: {type: String, trim:true},
    avalable: {type: String, trim:true},
    photo: {type: String, trim:true},
});

//Export du model Schema

module.exports = mongoose.model('videogames', gamesSchema, 'videogames')