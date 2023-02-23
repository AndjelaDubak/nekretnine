"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencijaController = void 0;
const agencija_1 = __importDefault(require("../models/agencija"));
class AgencijaController {
    constructor() {
        this.getAgencije = (req, res) => {
            agencija_1.default.find({}, (err, agencije) => {
                if (err)
                    console.log(err);
                else
                    res.json(agencije);
            });
        };
        this.getAgencijuPoNazivu = (req, res) => {
            agencija_1.default.findOne({ 'naziv': req.body.naziv }, (err, agencija) => {
                if (err)
                    console.log(err);
                else
                    res.json(agencija);
            });
        };
        this.addAgencija = (req, res) => {
            //console.log(req.body.adresa);
            let agencija = new agencija_1.default({ naziv: req.body.naziv, grad: req.body.grad, adresa: req.body.adresa, telefon: req.body.telefon, PIB: req.body.PIB });
            agencija_1.default.insertMany(agencija);
            res.json("ok");
        };
    }
}
exports.AgencijaController = AgencijaController;
//# sourceMappingURL=agencija.controller.js.map