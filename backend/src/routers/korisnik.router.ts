import express from 'express';
import { NekretninaController } from '../controllers/nekretnina.controller';
import { AgencijaController } from '../controllers/agencija.controller';
import { KorisnikController } from '../controllers/korisnik.controller';
import { MikrolokacijaController } from '../controllers/mikrolokacija.controller';

const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post(
    (req, res)=>new KorisnikController().prijava(req, res)
)

korisnikRouter.route('/getAgencije').get(
    (req, res)=>new AgencijaController().getAgencije(req, res)
)

korisnikRouter.route('/getKorisnike').get(
    (req, res)=>new KorisnikController().getKorisnike(req, res)
)

korisnikRouter.route('/registracija').post(
    (req, res)=>new KorisnikController().registracija(req, res)
)

korisnikRouter.route('/getNekretnine').get(
    (req, res)=>new NekretninaController().getNekretnine(req, res)
)

korisnikRouter.route('/promenaLozinke').post(
    (req, res)=>new KorisnikController().promenaLozinke(req, res)
)

korisnikRouter.route('/getNeodobreneKorisnike').get(
    (req, res)=>new KorisnikController().getNeodobreneKorisnike(req, res)
)

korisnikRouter.route('/prihvatiKorisnika').post(
    (req, res)=>new KorisnikController().prihvatiKorisnika(req, res)
)

korisnikRouter.route('/deleteKorisnik').post(
    (req, res)=>new KorisnikController().deleteKorisnik(req, res)
)

korisnikRouter.route('/changeKorisnikAdm').post(
    (req, res)=>new KorisnikController().changeKorisnikAdm(req, res)
)

korisnikRouter.route('/addAgencija').post(
    (req, res)=>new AgencijaController().addAgencija(req, res)
)

korisnikRouter.route('/getMikrolokacije').get(
    (req, res)=>new MikrolokacijaController().getMikrolokacije(req, res)
)

korisnikRouter.route('/addMikrolokacija').post(
    (req, res)=>new MikrolokacijaController().addMikrolokacija(req, res)
)

korisnikRouter.route('/deleteMikrolokacija').post(
    (req, res)=>new MikrolokacijaController().deleteMikrolokacija(req, res)
)

korisnikRouter.route('/getJedinstveneMikrolokacije').get(
    (req, res)=>new MikrolokacijaController().getJedinstveneMikrolokacije(req, res)
)

korisnikRouter.route('/getJedinstveneGradove').get(
    (req, res)=>new MikrolokacijaController().getJedinstveneGradove(req, res)
)

korisnikRouter.route('/getJedinstveneOpstine').get(
    (req, res)=>new MikrolokacijaController().getJedinstveneOpstine(req, res)
)

export default korisnikRouter;