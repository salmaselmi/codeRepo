const express = require('express')
const Commune = require('../models/commune')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to communes controller");
})
app.post('/add', async (req, res) => {
  try {
      let data = req.body 
      let commune = new Commune({
        
        IdCommune: data.IdCommune,
        gouv:data.gouv,
        NomCommuneFR:data.NomCommuneFR,
        NomCommuneAR:data.NomCommuneAR
       
      }) 
      let communeFormDb = await commune.save()
      res.status(200).send({ message: 'Commune added succefuly' })

  } catch (error) {
      res.status(400).send({ message: 'Can not add Commune ', error })
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
        let communes= await Commune.find() // traja3 tab d'objets
        res.status(200).send(communes)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})

app.get('/one/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let commune = await Commune.findOne({ _id: id })
        if (!commune) {
            res.status(404).send({ message: "commune not found!" })
        }
        else
            res.status(200).send({ commune })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/Update-info/:id', async (req, res) => {
  try {
      let id = req.params.id;
      let data = req.body;
      let updatedCommune = await Commune.findOneAndUpdate({ _id: id }, data)
      if (!updatedCommune) {
          res.status(404).send({ message: 'commune not found' })
      } else { res.status(200).send({ message: 'commune updated' }) }

  } catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedCommune = await Commune.findOneAndDelete({ _id: id })
      if (!deletedCommune) {
        res.status(404).send({ message: "commune not found" })
      }
      else {
        res.status(200).send({ message: "commune deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app