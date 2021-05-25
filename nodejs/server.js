const express = require('express');
const cors=require('cors') //tkhali api mte3i accessible ml front
require('./db/config')

const userControllers = require('./controllers/userController');
const projectControllers = require('./controllers/projectController');
const gouvernoratControllers = require('./controllers/gouvernoratController'); 
const projetControllers = require('./controllers/projetController');
const communeControllers = require('./controllers/communeController'); 
const quartierControllers = require('./controllers/quartierController'); 

const app = express();
app.use(cors()) //acces des serveurs
app.use (express.json()) //acces des donnees

app.use(express.urlencoded({ // ykhali les API mte3k ye9bl les fichiers, ykhali zeda les fichiers yodkhlou lel serveur
    extended:true
}))

app.use(express.static('./assets/users'))  //ykhaliw les dossiers accessibles ml front
app.use(express.static('./assets/projects'))
app.use(express.static('./assets/gouvernorats'))
app.use(express.static('./assets/projets'))
app.use(express.static('./assets/communes')) 
app.use(express.static('./assets/quartiers')) 

app.use('/user', userControllers)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server");
})

app.use('/project', projectControllers)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server");
})

/*app.use('/The requested resource <code class="url">/user/all</code> was not found on this server.', projectControllers)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server");
})*/

app.use('/gouvernorat', gouvernoratControllers)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server");
})

app.use('/projet', projetControllers)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server");
})

app.use('/commune', communeControllers)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server");
})
app.use('/quartier', quartierControllers)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server");
})

 app.listen(3001, function() {
  console.log('server started');
})