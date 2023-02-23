"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MikrolokacijaController = void 0;
const mikrolokacija_1 = __importDefault(require("../models/mikrolokacija"));
class MikrolokacijaController {
    constructor() {
        this.getMikrolokacije = (req, res) => {
            mikrolokacija_1.default.find({}, (err, mikrolokacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(mikrolokacije);
            });
        };
        this.addMikrolokacija = (req, res) => {
            let m = new mikrolokacija_1.default({ naziv: req.body.naziv, grad: req.body.grad, opstina: req.body.opstina, ulica: req.body.ulica });
            mikrolokacija_1.default.insertMany(m);
            res.json(m);
        };
        this.deleteMikrolokacija = (req, res) => {
            let m = new mikrolokacija_1.default({ naziv: req.body.naziv, grad: req.body.grad, opstina: req.body.opstina, ulica: req.body.ulica });
            mikrolokacija_1.default.collection.deleteMany({ naziv: req.body.naziv, grad: req.body.grad, opstina: req.body.opstina, ulica: req.body.ulica });
            res.json(m);
        };
        this.getJedinstveneMikrolokacije = (req, res) => {
            mikrolokacija_1.default.distinct('naziv', (err, mikrolokacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(mikrolokacije);
            });
        };
        this.getJedinstveneGradove = (req, res) => {
            mikrolokacija_1.default.distinct('grad', (err, mikrolokacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(mikrolokacije);
            });
        };
        this.getJedinstveneOpstine = (req, res) => {
            mikrolokacija_1.default.distinct('opstina', (err, mikrolokacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(mikrolokacije);
            });
        };
    }
}
exports.MikrolokacijaController = MikrolokacijaController;
//# sourceMappingURL=mikrolokacija.controller.js.map