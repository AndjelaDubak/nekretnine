import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Agencija = new Schema({
    naziv: {
        type: String
    },
    grad: {
        type: String
    },
    adresa: {
        type: String
    },
    telefon: {
        type: String
    },
    PIB: {
        type: String
    }
})

export default mongoose.model('Agencija', Agencija, 'agencije');