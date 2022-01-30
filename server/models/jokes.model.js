const mongoose = require("mongoose");
const jokesRoutes = require("../routes/jokes.routes")


const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type:String,
            required:[true,"Joke is required!"],
            minlength: [4,"Must have at least 4 characters"]
            },
        punchline: {
            type:String,
            required:[true,"Punchline is required"],
            minlength: [3,"Must have at least 3 characters"]
            },
},{timestamps:true})

const Jokes = mongoose.model("Joke",JokesSchema);

module.exports = Jokes;