const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/test", JokesController.testResponse);
    app.get("/api/jokes/all", JokesController.findAllJokes);
    app.get("/api/jokes/id", JokesController.findSingleJoke);
    app.put("/api/jokes/id/update", JokesController.updateJoke);
    app.post("/api/jokes/create", JokesController.createJoke);
    app.delete("/api/jokes/id/delete", JokesController.deleteJoke);
}