module.exports = function(app){

	app.get('/', function(req, res){
		res.status(200).json("Servidor rodando... Acesse uma URL válida");
	});
}