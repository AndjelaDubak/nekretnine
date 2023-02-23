import * as express from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController{
    prijava = (req: express.Request, res: express.Response)=>{
        let korIme = req.body.korIme;

        Korisnik.findOne({'korIme':korIme},(err, korisnik)=>{
            if(err) console.log(err);
            else res.json(korisnik);
        });

    }

    getKorisnike = (req: express.Request, res: express.Response)=>{
        Korisnik.find({},(err, korisnici)=>{
            if(err) console.log(err);
            else res.json(korisnici);
        });

    }

    registracija = (req: express.Request, res: express.Response)=>{

        let kor = new Korisnik({ime: req.body.ime, prezime:req.body.prezime, korIme:req.body.korIme, lozinka:req.body.lozinka, grad:req.body.grad, datumRodjenja:req.body.datumRodjenja, telefon:req.body.telefon, email:req.body.email, agencija:req.body.agencija, brojLicence: req.body.brojLicence, tip:req.body.tip, odobren:req.body.odobren, slika:req.body.slika});

        Korisnik.insertMany(kor);
        res.json(kor);

    }

    promenaLozinke = (req: express.Request, res: express.Response)=>{

        Korisnik.collection.updateOne({'korIme':req.body.korIme},{$set: {'lozinka': req.body.lozinka}});
        res.json("ok");
    }

    changeKorisnik = (req: express.Request, res: express.Response)=>{

        Korisnik.collection.updateOne({'korIme':req.body.korIme},{$set: {'telefon': req.body.telefon,'email':req.body.email,'agencija':req.body.agencija}});
        res.json("ok");
    }

    getNeodobreneKorisnike = (req: express.Request, res: express.Response)=>{

        Korisnik.find({'odobren':'ne'},(err, korisnici)=>{
            if(err) console.log(err);
            else res.json(korisnici);
        });
    }

    prihvatiKorisnika = (req: express.Request, res: express.Response)=>{

        Korisnik.collection.updateOne({'korIme':req.body.korIme},{$set: {'odobren': 'da'}});
        res.json("ok");
    }

    deleteKorisnik = (req: express.Request, res: express.Response)=>{
        Korisnik.collection.deleteOne({'korIme':req.body.korIme},(err, news)=>{
            if(err) console.log(err);
            else res.json({'message': 'ok'});
        });
    }

    changeKorisnikAdm = (req: express.Request, res: express.Response)=>{

        Korisnik.collection.updateOne({'korIme':req.body.korIme},{$set:{ime: req.body.ime, prezime:req.body.prezime, korIme:req.body.korIme, lozinka:req.body.lozinka, grad:req.body.grad, datumRodjenja:req.body.datumRodjenja, telefon:req.body.telefon, email:req.body.email, agencija:req.body.agencija, brojLicence: req.body.brojLicence, tip:req.body.tip, odobren:req.body.odobren, slika:req.body.slika}});
        res.json("ok");

    }

}