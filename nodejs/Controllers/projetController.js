const express = require('express')
const Projet = require('../models/projet')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to projet controller");
})
app.post('/add', async (req, res) => {
  try {
      let data = req.body 
      let projet = new Projet({
           
        Id: data.Id,
        gouvernorat:data.gouvernorat,
        Commune:data.Commune,
        Nb_maisons:data.Nb_maisons,
        Nb_quartiers: data.Nb_quartiers,
        Nb_habitants: data.Nb_habitants,
        superficie_quartier:data.superficie_quartier,
        superficie_quartier_couvert:data.superficie_quartier_couvert,
        rapport_superficie:data.rapport_superficie,
        taux_habitation:data.taux_habitation,
        rapport_depense_maison:data.rapport_depense_maison,
        composante_projet:data.composante_projet,
        voiries_cout:data.voiries_cout , 
        voiries_taux:data.voiries_taux,
        Voiries_qte:data.Voiries_qte

      }) 
      let projetFormDb = await projet.save()
      res.status(200).send({ message: 'projet added succefuly' })

  } catch (error) {
      res.status(400).send({ message: 'projet not added', error })
  }

})
  /* app.post('/add', async (req, res) => {
    try {
        let data = req.body

        let project = new Project({
            
            Id: data.Id,
            gouvernorat:data.gouvernorat,
            Commune:data.Commune,
            Nb_maisons:data.Nb_maisons,
            Nb_quartiers: data.Nb_quartiers,
            Nb_habitants: data.Nb_habitants,
            Voiries_qte: data.Voiries_qte 
             
        })

        let projectFormDb = await project.save()
        res.status(200).send({ message: 'project added succefuly' })

    } catch (error) {
        res.status(400).send({ message: ' add project failed ', error })
    }

}) */  

app.get('/all', async (req, res) => {
    try {
        let projets = await Projet.find() // traja3 tab d'objets
        res.status(200).send(projets)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})

app.get('/one/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let projet = await Projet.findOne({ _id: id })
        if (!projet) {
            res.status(404).send({ message: "projet not found" })
        }
        else
            res.status(200).send({ projet })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/Update-info/:id', async (req, res) => {
  try {
      let id = req.params.id;
      let data = req.body;
      let updatedProjet = await Projet.findOneAndUpdate({ _id: id }, data)
      if (!updatedProjet) {
          res.status(404).send({ message: 'projet not found' })
      } else { res.status(200).send({ message: 'projet updated' }) }

  } catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedProjet = await Projet.findOneAndDelete({ _id: id })
      if (!deletedProjet) {
        res.status(404).send({ message: "projet not found" })
      }
      else {
        res.status(200).send({ message: "projet deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app