var users = require('../controllers/users');
var questions = require('../controllers/questions')
const path = require('path');

module.exports = function(app) {

    /////////////////////////////
    // -- NOTE: BEGIN USER ROUTES
    /////////////////////////////
    // CREATE
    app.post('/users', (req, res, next) => {
        users.create( req, res, next );
    });
    // CREATE A GAME THE USER PLAYED
    app.post('/users/:id', (req, res, next) => {
        users.createGame( req, res, next );
    });
    // READ
    app.get('/users', (req, res, next) => {
        users.readAll( req, res, next );
    });
    // app.get('/users/:id', (req, res, next) => {
    //     console.log('GET /users/:id');
    //
    //     // TODO: handle getOne...
    //
    //     users.readOne( req, res, next );
    // });
    // UPDATE
    //
    // app.put('/users/:id', (req, res, next) => {
    //     console.log('PUT /users/:id');
    //
    //     // TODO: no update atm...
    //
    //     res.json(true)
    // });
    // DELETE
    // app.delete('/users/:id', (req, res, next) => {
    //     console.log('DELETE /users/:id');
    //     // TODO:
    //     users.delete( req, res, next );
    // });
    /////////////////////////////
    // -- NOTE: END USER ROUTES
    /////////////////////////////


    /////////////////////////////
    // -- NOTE: BEGIN QUESTION ROUTES
    /////////////////////////////
    // CREATE
    app.post('/questions', (req, res, next) => {
        questions.create( req, res, next );
    });
    // READ
    app.get('/questions', (req, res, next) => {
        questions.readAll( req, res, next );
    });
    /////////////////////////////
    // -- NOTE: END QUESTION ROUTES
    /////////////////////////////

    // keep this last...
    app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
