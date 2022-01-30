const Jokes = require("../models/jokes.model");
// Holds validations

module.exports.testResponse = (req, res) => {
    res.json({message: "yo brotato, started from the bottom now we're here!!"})
}

module.exports.findAllJokes = (req, res) => {
    Jokes.find({})
    .then(result =>res.json({result: result}))
    .catch(err =>res.json({message: "Please try again!", error: err}));
}

module.exports.findSingleJoke = (req, res) => {
    Jokes.findSingle({id: req.params.id})
    .then(result =>res.json({result: result}))
    .catch(err=>res.json({message: "Please try again!", error: err}));
}

module.exports.updateJoke = (req, res) => {
    Jokes.updateOne({id:req.params.id}, req.body)
        .then(result=>res.json({result: result}))
        .catch(err=>res.json({message: "Please try again!", error: err}));
}

module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
    .then(result =>res.json({result: result}))
    .catch(err=>res.json({message: "Please try again!", error: err}));
}

module.exports.deleteJoke = (req, res) => {
    Jokes.delete({id:req.params.id}, req.body)
    .then(result=>res.json({result: result}))
    .catch(err=>res.json({message: "Please try again!", error: err}));
}