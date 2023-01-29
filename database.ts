import mongoose, { ConnectOptions} from "mongoose";
import config from './config/config'

const dbOpciones: ConnectOptions ={
//??
}
mongoose.set('strictQuery', true);

mongoose.connect(config.DB.URI)

const connection = mongoose.connection;

connection.once('open', () => {

console.log('El MondongoDB se ha conectado')

});

connection.on('error', err =>{
console.log(err);

process.exit(0)

})