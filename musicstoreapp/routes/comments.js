const {ObjectId} = require("mongodb");
module.exports = function (app, commentsRepository) {
    app.post('/comments/:song_id', function (req, res) {

        let comment = {
            author: req.session.user,
            text: req.body.comment,
            song_id: ObjectId(req.params.song_id)
        }

        if(comment.author == null){
            res.send("Error al insertar el comentario");
        } else{
            commentsRepository.insertComment(comment, function (comment_id){
                if(comment_id == null){
                    res.send("Error al insertar el comentario");
                } else{
                    res.send("Comentario añadido correctamente: " + comment_id);
                }
            });
        }
    });

};