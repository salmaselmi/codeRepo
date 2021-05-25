const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Salma98:latifa98@cluster0.d7mol.mongodb.net/backend?retryWrites=true&w=majority',
 { 
    
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

    .then(() => {
        console.log("we are connected to database")
    })

    .catch(() => {
       console.log("connection error!")
    }) 


module.exports = mongoose