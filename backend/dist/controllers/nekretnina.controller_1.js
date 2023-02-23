"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NekretninaController = void 0;
const nekretnina_1 = __importDefault(require("../models/nekretnina"));
class NekretninaController {
    constructor() {
        this.getNekretnine = (req, res) => {
            nekretnina_1.default.find({}, (err, nekretnine) => {
                if (err)
                    console.log(err);
                else
                    res.json(nekretnine);
            });
        };
        this.pretraga = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let nekretnine = yield nekretnina_1.default.find({ 'tip': req.body.tip, 'prodato': 'ne' }).exec();
            if (req.body.grad != '') {
                //console.log("grad");
                nekretnine = nekretnine.filter(nekretnina => req.body.grad.includes(nekretnina.get("grad")));
            }
            if (req.body.opstina != '') {
                nekretnine = nekretnine.filter(nekretnina => req.body.opstina.includes(nekretnina.get("opstina")));
            }
            if (req.body.mikrolokacija != '') {
                nekretnine = nekretnine.filter(nekretnina => req.body.mikrolokacija.includes(nekretnina.get("mikrolokacija")));
            }
            if (req.body.cena != null) {
                nekretnine = nekretnine.filter(nekretnina => nekretnina.get("cena") < req.body.cena);
            }
            if (req.body.kvadratura != null) {
                nekretnine = nekretnine.filter(nekretnina => nekretnina.get("kvadratura") > req.body.kvadratura);
            }
            if (req.body.brSoba != null) {
                nekretnine = nekretnine.filter(nekretnina => nekretnina.get("brSoba") == req.body.brSoba);
            }
            res.json(nekretnine);
        });
        this.getPoMikrolokaciji = (req, res) => {
            //console.log("dosaaaooo");
            nekretnina_1.default.find({ 'mikrolokacija': req.body.mikrolokacija }, (err, nekretnine) => {
                if (err)
                    console.log(err);
                else
                    res.json(nekretnine);
            });
        };
        this.getPoTipuIMikrolokaciji = (req, res) => {
            nekretnina_1.default.find({ 'tip': req.body.tip, 'mikrolokacija': req.body.mikrolokacija }, (err, nekretnine) => {
                if (err)
                    console.log(err);
                else
                    res.json(nekretnine);
            });
        };
        this.naprednaPretraga = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let nekretnine = yield nekretnina_1.default.find({ 'prodato': 'ne' }).exec();
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("cena") > req.body.cenaOd && nekretnina.get("cena") < req.body.cenaDo);
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("kvadratura") > req.body.kvadraturaOd && nekretnina.get("kvadratura") < req.body.kvadraturaDo);
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("brSoba") > req.body.brSobaOd && nekretnina.get("brSoba") < req.body.brSobaDo);
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("godIzgradnje") > req.body.godIzgradnjeOd && nekretnina.get("godIzgradnje") < req.body.godIzgradnjeDo);
            if (req.body.oglasivac.length != 0) {
                //console.log(req.body.oglasivac);
                nekretnine = nekretnine.filter(nekretnina => req.body.oglasivac.includes(nekretnina.get("tipOglasivaca")));
            }
            if (req.body.stanje.length != 0) {
                nekretnine = nekretnine.filter(nekretnina => req.body.stanje.includes(nekretnina.get("stanje")));
            }
            if (req.body.grejanje.length != 0) {
                nekretnine = nekretnine.filter(nekretnina => req.body.grejanje.includes(nekretnina.get("tipGrejanja")));
            }
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("sprat") > req.body.spratOd && nekretnina.get("sprat") < req.body.spratDo);
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("mesecneRezije") > req.body.mesecneRezijeOd && nekretnina.get("mesecneRezije") < req.body.mesecneRezijeDo);
            console.log(req.body.karakteristike != '');
            if (req.body.karakteristike != '') {
                nekretnine = nekretnine.filter(nekretnina => req.body.karakteristike.includes(nekretnina.get("karakteristike")));
            }
            res.json(nekretnine);
            return;
        });
        this.getNekretnineOglasivaca = (req, res) => {
            nekretnina_1.default.find({ 'oglasivac': req.body.oglasivac }, (err, nekretnine) => {
                if (err)
                    console.log(err);
                else
                    res.json(nekretnine);
            });
        };
        this.addNekretnina = (req, res) => {
            let nekretnina = new nekretnina_1.default({ idN: parseInt(req.body.idN), naziv: req.body.naziv, tip: req.body.tip, grad: req.body.grad, opstina: req.body.opstina, mikrolokacija: req.body.mikrolokacija, ulica: req.body.ulica, kvadratura: parseInt(req.body.kvadratura), cena: parseInt(req.body.cena), oglasivac: req.body.oglasivac, godIzgradnje: req.body.godIzgradnje, stanje: req.body.stanje, tipGrejanja: req.body.tipGrejanja, sprat: parseInt(req.body.sprat), ukupnaSpratnost: parseInt(req.body.ukupnaSpratnost), parking: req.body.parking, opis: req.body.opis, karakteristike: req.body.karakteristike, slike: req.body.slike, linije: req.body.linije, brSoba: parseInt(req.body.brSoba), mesecneRezije: parseInt(req.body.mesecneRezije), tipOglasivaca: req.body.tipOglasivaca, prodato: req.body.prodato, izmenaDatum: "", izmenaVreme: "" });
            nekretnina_1.default.insertMany(nekretnina);
            res.json(nekretnina);
        };
        this.changeNekretnina = (req, res) => {
            let nekretnina = new nekretnina_1.default({ idN: parseInt(req.body.idN), naziv: req.body.naziv, tip: req.body.tip, grad: req.body.grad, opstina: req.body.opstina, mikrolokacija: req.body.mikrolokacija, ulica: req.body.ulica, kvadratura: parseInt(req.body.kvadratura), cena: parseInt(req.body.cena), oglasivac: req.body.oglasivac, godIzgradnje: req.body.godIzgradnje, stanje: req.body.stanje, tipGrejanja: req.body.tipGrejanja, sprat: parseInt(req.body.sprat), ukupnaSpratnost: parseInt(req.body.ukupnaSpratnost), parking: req.body.parking, opis: req.body.opis, karakteristike: req.body.karakteristike, slike: req.body.slike, linije: req.body.linije, brSoba: parseInt(req.body.brSoba), mesecneRezije: parseInt(req.body.mesecneRezije), tipOglasivaca: req.body.tipOglasivaca, prodato: req.body.prodato, izmenaDatum: req.body.izmenaDatum, izmenaVreme: req.body.izmenaVreme });
            nekretnina_1.default.collection.updateOne({ 'idN': parseInt(req.body.idN) }, { $set: { idN: parseInt(req.body.idN), naziv: req.body.naziv, tip: req.body.tip, grad: req.body.grad, opstina: req.body.opstina, mikrolokacija: req.body.mikrolokacija, ulica: req.body.ulica, kvadratura: parseInt(req.body.kvadratura), cena: parseInt(req.body.cena), oglasivac: req.body.oglasivac, godIzgradnje: req.body.godIzgradnje, stanje: req.body.stanje, tipGrejanja: req.body.tipGrejanja, sprat: parseInt(req.body.sprat), ukupnaSpratnost: parseInt(req.body.ukupnaSpratnost), parking: req.body.parking, opis: req.body.opis, karakteristike: req.body.karakteristike, slike: req.body.slike, linije: req.body.linije, brSoba: parseInt(req.body.brSoba), mesecneRezije: parseInt(req.body.mesecneRezije), tipOglasivaca: req.body.tipOglasivaca, prodato: req.body.prodato, izmenaDatum: req.body.izmenaDatum, izmenaVreme: req.body.izmenaVreme } });
            res.json(nekretnina);
        };
        this.changeProdato = (req, res) => {
            nekretnina_1.default.collection.updateOne({ 'idN': parseInt(req.body.idN) }, { $set: { prodato: req.body.prodato } });
            res.json("ok");
        };
        this.getPoTipuOglasivaca = (req, res) => {
            nekretnina_1.default.find({ 'tipOglasivaca': req.body.tip }, (err, nekretnine) => {
                if (err)
                    console.log(err);
                else
                    res.json(nekretnine);
            });
        };
        this.getNekretnineGrad = (req, res) => {
            nekretnina_1.default.find({ 'grad': req.body.grad, 'mikrolokacija': req.body.naziv, 'opstina': req.body.opstina, 'ulica': req.body.ulica, 'prodato': 'ne' }, (err, nekretnine) => {
                if (err)
                    console.log(err);
                else
                    res.json(nekretnine);
            });
        };
    }
}
exports.NekretninaController = NekretninaController;
//# sourceMappingURL=nekretnina.controller.js.map