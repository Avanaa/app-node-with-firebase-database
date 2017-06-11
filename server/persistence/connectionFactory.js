var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL : 'https://mobcare-cbf6d.firebaseio.com/'
})

 module.exports = function(){
     return admin.database;
 }