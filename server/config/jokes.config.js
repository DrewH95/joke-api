const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/joke_api`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>console.log("Dude, you're connected to mongo db, nice job!"))
    .catch(err=>console.log("beep boop bop db connection was a flop",err))

    // talks to mondo server and tries to connect. Pretty cut and dry in config.
    // issue was naming conventions