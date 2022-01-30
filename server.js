const express = require("express");
const app = express();
const port = 8000;

app.get("/api", (req, res)=>{
    res.json({message: "hey dude, you made it!"});
});

require("./server/config/jokes.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/jokes.routes")(app);

app.listen(port, ()=> console.log(`running on port ${port}`));

// all good here