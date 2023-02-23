import express from 'express';
import { LinijaController } from '../controllers/linija.controller';
import { AgencijaController } from '../controllers/agencija.controller';
import { NekretninaController } from '../controllers/nekretnina.controller';
import { KorisnikController } from '../controllers/korisnik.controller';

const oglasivacRouter = express.Router();

oglasivacRouter.route('/getNekretnineOglasivaca').post(
    (req, res)=>new NekretninaController().getNekretnineOglasivaca(req, res)
)

oglasivacRouter.route('/getLinije').get(
    (req, res)=>new LinijaController().getLinije(req, res)
)

oglasivacRouter.route('/addNekretnina').post(
    (req, res)=>new NekretninaController().addNekretnina(req, res)
)

oglasivacRouter.route('/changeNekretnina').post(
    (req, res)=>new NekretninaController().changeNekretnina(req, res)
)

oglasivacRouter.route('/changeProdato').post(
    (req, res)=>new NekretninaController().changeProdato(req, res)
)

oglasivacRouter.route('/changeKorisnik').post(
    (req, res)=>new KorisnikController().changeKorisnik(req, res)
)

oglasivacRouter.route('/getPoTipuOglasivaca').post(
    (req, res)=>new NekretninaController().getPoTipuOglasivaca(req, res)
)

oglasivacRouter.route('/getNekretnineGrad').post(
    (req, res)=>new NekretninaController().getNekretnineGrad(req, res)
)

export default oglasivacRouter;