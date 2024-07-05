import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

import Connection from './database/db.js';

const port = 3000;

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

Connection();

import Route from './routes/routes.js';

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});

app.use('/', Route);