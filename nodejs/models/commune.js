const mongoose = require("mongoose")
const Commune = mongoose.model('communes', {

    IdCommune: {
        type: String,
        required: true,
        unique:true 
    },
    gouv: {
        type: String,
        required: true 
    }, 
   
    NomCommuneFR: {
        type: String,
        required: true
    },
    NomCommuneAR: {
        type: String,
        required: true
    }
})
module.exports = Commune

