const mongoose = require("mongoose")
const Project = mongoose.model('projects', {
    Id: {
        type: String,
        required: true,
        unique: true

   },
     Nom: {
        type: String,
        required: true

   },
    gouvernorat: {
        type: String,
        required: true
    },
    Commune: {
        type: String,
        required: true
    },
    Nb_maisons: {
        type: String,
        required: true
    },
    Nb_quartiers: {
        type: String,
        required: true
 
    },
    Nb_habitants: {
        type: String,
        required: true
    },
    superficie_quartier:{
        type: String,
        required: true
    },
    superficie_quartier_couvert:{
        type: String,
        required: true
    },
    rapport_superficie:{
        type: String,
        required: true
    }, 
    taux_habitation:{
        type: String,
        required: true
    },
    rapport_depense_maison:{
        type: String,
        required: true
    },
    composante_projet:{
        type: String,
        required: true
    },
    voiries_cout:{
        type: String,
        required: true
    } ,
    voiries_taux:{
        type: String,
        required: true
    },
    Voiries_qte: {
        type: String,
        required: true,
     } 
})
module.exports = Project