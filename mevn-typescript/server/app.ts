import express from 'express';
import morgan from 'morgan';
import cors from 'cors' ; 
import tasksRoutes from './routes'; 

const app = express() ; 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}); 
app.use(morgan('dev')) ; 
app.use(express.json()) ; 



app.use("/api", tasksRoutes) ; 



export default app ; 