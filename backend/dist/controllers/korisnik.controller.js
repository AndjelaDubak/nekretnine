"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.prijava = (req, res) => {
            let korIme = req.body.korIme;
            korisnik_1.default.findOne({ 'korIme': korIme }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.getKorisnike = (req, res) => {
            korisnik_1.default.find({}, (err, korisnici) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnici);
            });
        };
        this.registracija = (req, res) => {
            let kor = new korisnik_1.default({ ime: req.body.ime, prezime: req.body.prezime, korIme: req.body.korIme, lozinka: req.body.lozinka, grad: req.body.grad, datumRodjenja: req.body.datumRodjenja, telefon: req.body.telefon, email: req.body.email, agencija: req.body.agencija, brojLicence: req.body.brojLicence, tip: req.body.tip, odobren: req.body.odobren, slika: req.body.slika });
            korisnik_1.default.insertMany(kor);
            res.json(kor);
        };
        this.promenaLozinke = (req, res) => {
            korisnik_1.default.collection.updateOne({ 'korIme': req.body.korIme }, { $set: { 'lozinka': req.body.lozinka } });
            res.json("ok");
        };
        this.changeKorisnik = (req, res) => {
            korisnik_1.default.collection.updateOne({ 'korIme': req.body.korIme }, { $set: { 'telefon': req.body.telefon, 'email': req.body.email, 'agencija': req.body.agencija } });
            res.json("ok");
        };
        this.getNeodobreneKorisnike = (req, res) => {
            korisnik_1.default.find({ 'odobren': 'ne' }, (err, korisnici) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnici);
            });
        };
        this.prihvatiKorisnika = (req, res) => {
            korisnik_1.default.collection.updateOne({ 'korIme': req.body.korIme }, { $set: { 'odobren': 'da' } });
            res.json("ok");
        };
        this.deleteKorisnik = (req, res) => {
            korisnik_1.default.collection.deleteOne({ 'korIme': req.body.korIme }, (err, news) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.changeKorisnikAdm = (req, res) => {
            korisnik_1.default.collection.updateOne({ 'korIme': req.body.korIme }, { $set: { ime: req.body.ime, prezime: req.body.prezime, korIme: req.body.korIme, lozinka: req.body.lozinka, grad: req.body.grad, datumRodjenja: req.body.datumRodjenja, telefon: req.body.telefon, email: req.body.email, agencija: req.body.agencija, brojLicence: req.body.brojLicence, tip: req.body.tip, odobren: req.body.odobren, slika: req.body.slika } });
            res.json("ok");
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map