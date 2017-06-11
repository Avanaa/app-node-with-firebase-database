function RegistroDao(database){
    this.connection = database.ref('dominio');
}

RegistroDao.prototype.getAll = function(callback){
    
    var lista;
    this.connection.on('value', function(snapshot){
        lista = snapshot.val();
    },
    callback);

    return lista;
}

RegistroDao.prototype.getById = function(id, callback){
    
}

RegistroDao.prototype.salva = function(registro, callback){
    
    registro.data_criacao = new Date;
    registro.data_alteracao = new Date;
    registro.ativo = true;

    var key = this.connection.push(registro, callback).key;

    return key;
}

module.exports = function(){
    return RegistroDao;
}