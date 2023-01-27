import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRoutes from './routes/auth.routes'

const app = express();




app.set('port', process.env.port || 3000)


app.use(authRoutes);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());





app.get('/',(_req,res)=>{ 

    res.send(   `  La api esta en http://localhost:${app.get('port')} `)
});





export default app;