const mongoose = require("mongoose")
const Quartier = mongoose.model('quartiers', {

    gouvernorat:{
        type: String,
        required:true
    },
    Commune: {
        type: String,
        required: true
    },

    IdQuartier: {
        type: String,
        required: true,
        unique: true

   },
    NomQuartier: {
        type: String,
        required: true,
        unique:true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true


    }, 
})
module.exports = Quartier

