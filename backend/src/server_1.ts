import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import korisnikRouter from './routers/korisnik.router';
import kupacRouter from './routers/kupac.router';
import oglasivacRouter from './routers/oglasivac.router';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/pia_projekat');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok')
})

const router = express.Router();
router.use('/korisnik', korisnikRouter);

router.use('/kupac', kupacRouter);

router.use('/oglasivac', oglasivacRouter);

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));