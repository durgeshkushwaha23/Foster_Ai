import 'dotenv/config';

import express from 'express';
import {connect} from './db/db.js'
import morgan from 'morgan';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import redisClient from './services/redis.service.js';
import Cors from 'cors';


connect();
const app = express();




app.use(Cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users',userRoutes);


app.get('/', (req, res) =>  {
    res.send('Hello, World!');
})

export  default app;