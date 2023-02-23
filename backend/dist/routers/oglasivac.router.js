"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const linija_controller_1 = require("../controllers/linija.controller");
const nekretnina_controller_1 = require("../controllers/nekretnina.controller");
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const oglasivacRouter = express_1.default.Router();
oglasivacRouter.route('/getNekretnineOglasivaca').post((req, res) => new nekretnina_controller_1.NekretninaController().getNekretnineOglasivaca(req, res));
oglasivacRouter.route('/getLinije').get((req, res) => new linija_controller_1.LinijaController().getLinije(req, res));
oglasivacRouter.route('/addNekretnina').post((req, res) => new nekretnina_controller_1.NekretninaController().addNekretnina(req, res));
oglasivacRouter.route('/changeNekretnina').post((req, res) => new nekretnina_controller_1.NekretninaController().changeNekretnina(req, res));
oglasivacRouter.route('/changeProdato').post((req, res) => new nekretnina_controller_1.NekretninaController().changeProdato(req, res));
oglasivacRouter.route('/changeKorisnik').post((req, res) => new korisnik_controller_1.KorisnikController().changeKorisnik(req, res));
oglasivacRouter.route('/getPoTipuOglasivaca').post((req, res) => new nekretnina_controller_1.NekretninaController().getPoTipuOglasivaca(req, res));
oglasivacRouter.route('/getNekretnineGrad').post((req, res) => new nekretnina_controller_1.NekretninaController().getNekretnineGrad(req, res));
exports.default = oglasivacRouter;
//# sourceMappingURL=oglasivac.router.js.map