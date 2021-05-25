const express = require('express')
const Quartier = require('../models/quartier')
const app = express()
const fs = require('fs') // manipulation des fichiers nbadlelhom esmhom ..np
const multer = require('multer') //gerer les fichiers eli jeyiin ml Front ay naw3 te3 fichier //fih des fonctionnalités najmou bihom nestockiw des donnés jeyin ml backend
const path = require('path')


// paramétres stockage (taswira wiin bch n7ot'ha)
const stockage = multer.diskStorage({
  destination: './assets/quartier', // wiin bch nestocki lfichier
  filename: function (req, file, cb) {     //cb fonction nexécutiwha bch tekhdmelna khedma mou3ayna //req données eli jeyin ml Front w file fichier eli jeya ml front w cb nmanipuli biha esm lfichier
      cb(null, Date.now() + path.extname(file.originalname))  //parametre loul null eli houa erreur null khater 3andich error WL paramétre theni esmou esmou ykoun unique bl date khatrou bl ms WL extname ya3tini l'extension te3 lfichier
  }
})

//Upload (nchekiw type lfile png.. wl 7aja thenya upload)
//check file hia ta3ml verification ltype te3 lfichier
function check(file, cb) {
  
  const types = /jpeg|jpg|png|gif|pdf /;
  const verifExt = types.test(path.extname(file.originalname).toLowerCase()) //extention fichier
  const verifMime = types.test(file.mimetype) //type fichier

  if (verifExt && verifMime) {
      return cb(null, true) //true ma3neha ekhdem lkhedma te3 tabdil lesm
  }
  else {
      cb('Invalid File Type')
  }
}


//Upload 
//configuration multer
const upload = multer({
  storage: stockage, //taswira ml front wiin bch nestockiha
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
      check(file, cb)
  }
}) 
app.get('/', (req, res) => {
    res.status(200).send("Welcome to quartiers controller");
})
app.post('/add',  async (req, res) => {
// console.log(file)
  try {
     let data = req.body 
     console.log(data)
      let quartier = new Quartier({
        gouvernorat:data.gouvernorat,
        Commune:data.Commune,
        IdQuartier: data.IdQuartier,
        NomQuartier: data.NomQuartier,
        lat:data.lat, 
        long:data.long, 
        img:data.img 
         
      }) 
      let quartierFormDb = await quartier.save()
      res.status(200).send({ message: 'Quartier added succefuly' })

  } catch (error) {
     
    res.status(400).send({ message: 'Cannot add Quartier ', error })
  }

}) 

app.get('/all', async (req, res) => {
    try {
        let quartiers= await Quartier.find() // traja3 tab d'objets
        res.status(200).send(quartiers)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})

app.get('/one/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let quartier = await Quartier.findOne({ _id: id })
        if (!quartier) {
            res.status(404).send({ message: "quartier not found!" })
        }
        else
            res.status(200).send({ quartier })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/Update-info/:id', async (req, res) => {
  try {
      let id = req.params.id;
      let data = req.body;
      let updatedQuartier = await Quartier.findOneAndUpdate({ _id: id }, data)
      if (!updatedQuartier) {
          res.status(404).send({ message: 'quartier not found' })
      } else { res.status(200).send({ message: 'quartier updated' }) }

  } catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedQuartier = await Quartier.findOneAndDelete({ _id: id })
      if (!deletedQuartier) {
        res.status(404).send({ message: "quartier not found" })
      }
      else {
        res.status(200).send({ message: "quartier deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app