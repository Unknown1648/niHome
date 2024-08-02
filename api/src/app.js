import express from 'express';
import {router} from './routes/home.js';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors())

app.use('/niHome', router);

const startServer = () => {
    app.listen(port, ()=> {
        console.log(`starting on ${port}`)
    })
}

startServer();