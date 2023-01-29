import app from './app'
import './database'
app.listen(app.get('port'))
console.log('server en el puerto', app.get('port'));