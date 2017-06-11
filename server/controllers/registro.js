module.exports = function(app){

    // Retorna todos os registros
    app.get('/registro', function(req, res){

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.registroDao(connection);

        var lista = dao.getAll(function(erro){
            if(erro){
                res.status(500).json(app.files.erroinsert);
                return;
            }
        });
        res.status(200).json(lista);
    });

    // Retorna o registro pelo id passado
    app.get('/registro/:id', function(req, res){

        var id = req.params.id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.registroDao(connection);

        var registro = dao.getById(id, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroinsert);
                return;
            }
        });
        res.status(200).json(registro);
    });

    // Cria um novo registro
    app.post('/registro', function(req, res){

        //Validações devem vir aqui

        var dominio = req.body;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.registroDao(connection);

        var newPostKey = dao.salva(dominio, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroinsert);
                return;
            }
        });

        res.status(201).json(newPostKey);
    });

    // Atualiza um registro
    app.put('/registro/:id', function(req, res){

    });

    // Apaga um registro
    app.delete('/registro/:id', function(req, res){

    })
}