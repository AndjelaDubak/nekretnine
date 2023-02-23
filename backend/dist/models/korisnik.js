"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Korisnik = new Schema({
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    korIme: {
        type: String
    },
    lozinka: {
        type: String
    },
    grad: {
        type: String
    },
    datumRodjenja: {
        type: String
    },
    telefon: {
        type: String
    },
    email: {
        type: String
    },
    agencija: {
        type: String
    },
    brojLicence: {
        type: String
    },
    tip: {
        type: String
    },
    odobren: {
        type: String
    },
    slika: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Korisnik', Korisnik, 'korisnici');
//# sourceMappingURL=korisnik.js.map