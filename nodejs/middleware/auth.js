const jwt = require('jsonwebtoken')

const isAdmin = (req, res, next) => {

    try {
        let token = req.get("Authorization")
        if (!token) {
            res.status(400).send({ message: "You are not allowed" })
        } else {
            let decodedToken = jwt.verify(token, "SECRET") // SECRET houa clé te3 décryptage
            if (!decodedToken) {
                res.status(400).send({ message: "You are not allowed" })
            } else {
                if (decodedToken.role == "admin") {
                    next()
                } else {
                    res.status(400).send({ message: "You are not allowed" })
                }
            }
        }
    } catch (error) {
        res.status(400).send({ message: "You are not allowed" })
    }
    //console.log("welcome to middleware");

    //res.status(400).send({message: " not allowed"})
    //next()
}

const isUser = (req, res, next) => {

    try {
        let token = req.get("Authorization")
        if (!token) {
            res.status(400).send({ message: "You are not allowed" })
        } else {
            let decodedToken = jwt.verify(token, "SECRET") // SECRET houa clé te3 décryptage
            if (!decodedToken) {
                res.status(400).send({ message: "You are not allowed" })
            } else {
                if (decodedToken.role == "user") {
                    next()
                } else {
                    res.status(400).send({ message: "You are not allowed" })
                }
            }
        }
    } catch (error) {
        res.status(400).send({ message: "You are not allowed" })
    }
    //console.log("welcome to middleware");

    //res.status(400).send({message: " not allowed"})
    //next()
}
module.exports = isAdmin
module.exports = isUser