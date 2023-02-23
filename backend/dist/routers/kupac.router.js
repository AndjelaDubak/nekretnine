"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agencija_controller_1 = require("../controllers/agencija.controller");
const nekretnina_controller_1 = require("../controllers/nekretnina.controller");
const kupacRouter = express_1.default.Router();
kupacRouter.route('/pretraga').post((req, res) => new nekretnina_controller_1.NekretninaController().pretraga(req, res));
kupacRouter.route('/getPoMikrolokaciji').post((req, res) => new nekretnina_controller_1.NekretninaController().getPoMikrolokaciji(req, res));
kupacRouter.route('/getAgencijuPoNazivu').post((req, res) => new agencija_controller_1.AgencijaController().getAgencijuPoNazivu(req, res));
kupacRouter.route('/naprednaPretraga').post((req, res) => new nekretnina_controller_1.NekretninaController().naprednaPretraga(req, res));
kupacRouter.route('/getPoTipuIMikrolokaciji').post((req, res) => new nekretnina_controller_1.NekretninaController().getPoMikrolokaciji(req, res));
exports.default = kupacRouter;
//# sourceMappingURL=kupac.router.js.map