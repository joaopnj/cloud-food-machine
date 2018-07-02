module.exports = (app) => { 

    const mongoose = require('mongoose');
    const mongourl = 'mongodb://localhost:27017/machine';

    var MongoDbMiddleware = {

        // Método que estabelece conexão do banco de dados
        connect : () => {
            mongoose.connect(mongourl, (err) => {
                if(err) console.log('Erro ao conectar no mongodb '+ err);
            });
        }
    }
    return MongoDbMiddleware;
}
