var app = require('./config/express-config')();

var port = process.env.port || 3001;

app.listen(port, function(){
    console.log('Servidor rodando na porta 3001..');
});