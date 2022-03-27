module.exports = function (app) {

    app.get("/authors", function (req, res) {
        let authors = [{
            "name":"Gonna sleep",
            "group":"Bananas",
            "rol":"Cantante"
        }, {
            "name":"Gonna go",
            "group":"Nocturnos",
            "rol":"Cantante"
        }, {
            "name":"Gonna die",
            "group":"Los durmientes",
            "rol":"Cantante"
        }];

        let response = {
            seller: "Lista de artistas",
            authors: authors
        };

        res.render("authors.twig", response);
    });

    app.get('/authors/add', function(req, res) {
        res.render("authors_add.twig");
    });

    app.post('/authors/add', function(req, res) {
        let response = "Artista agregado: " + req.body.name + "<br>"
            + " grupo: " + req.body.grupo + "<br>"
            + " rol: " + req.body.rol;
        res.send(response);
    });

    app.get('/authors*', function (req, res) {
        res.redirect("/authors");
    });
};