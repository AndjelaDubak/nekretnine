import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Nekretnina = new Schema({
    idN: {
        type: Number
    },
    naziv: {
        type: String
    },
    tip: {
        type: String
    },
    grad: {
        type: String
    },
    opstina: {
        type: String
    },
    mikrolokacija: {
        type: String
    },
    ulica: {
        type: String
    },
    kvadratura: {
        type: Number
    },
    cena: {
        type: Number
    },
    oglasivac: {
        type: String
    },
    godIzgradnje: {
        type: String
    },
    stanje: {
        type: String
    },
    tipGrejanja: {
        type: String
    },
    sprat: {
        type: Number
    },
    ukupnaSpratnost: {
        type: Number
    },
    parking: {
        type: String
    },
    opis: {
        type: String
    },
    karakteristike: {
        type: String
    },
    slike: {
        type: Array
    },
    linije: {
        type:String
    },
    brSoba:{
        type: Number
    },
    mesecneRezije:{
        type: Number
    },
    tipOglasivaca:{
        type: String
    },
    prodato: {
        type: String
    },
    izmenaDatum: {
        type: String
    },
    izmenaVreme: {
        type: String
    }
})

export default mongoose.model('Nekretnina', Nekretnina, 'nekretnine');