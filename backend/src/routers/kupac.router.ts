import express from 'express';
import { MikrolokacijaController } from '../controllers/mikrolokacija.controller';
import { AgencijaController } from '../controllers/agencija.controller';
import { NekretninaController } from '../controllers/nekretnina.controller';

const kupacRouter = express.Router();

kupacRouter.route('/pretraga').post(
    (req, res)=>new NekretninaController().pretraga(req, res)
)

kupacRouter.route('/getPoMikrolokaciji').post(
    (req, res)=>new NekretninaController().getPoMikrolokaciji(req, res)
)

kupacRouter.route('/getAgencijuPoNazivu').post(
    (req, res)=>new AgencijaController().getAgencijuPoNazivu(req, res)
)

kupacRouter.route('/naprednaPretraga').post(
    (req, res)=>new NekretninaController().naprednaPretraga(req, res)
)

kupacRouter.route('/getPoTipuIMikrolokaciji').post(
    (req, res)=>new NekretninaController().getPoMikrolokaciji(req, res)
)

export default kupacRouter;