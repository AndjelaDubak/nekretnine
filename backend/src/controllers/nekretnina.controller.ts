import * as express from 'express';
import Nekretnina from '../models/nekretnina';

export class NekretninaController{
    getNekretnine = (req: express.Request, res: express.Response)=>{

        Nekretnina.find({},(err, nekretnine)=>{
            if(err) console.log(err);
            else res.json(nekretnine);
        });

    }

    pretraga = async (req: express.Request, res: express.Response) => {
        let nekretnine = await Nekretnina.find({'tip':req.body.tip, 'prodato':'ne'}).exec();
        if (req.body.grad != '') {
           //console.log("grad");
            nekretnine = nekretnine.filter(nekretnina => req.body.grad.includes(nekretnina.get("grad")));
        }
        if(req.body.opstina != '') {
            nekretnine = nekretnine.filter(nekretnina => req.body.opstina.includes(nekretnina.get("opstina")));
        }
        if(req.body.mikrolokacija != '') {
            nekretnine = nekretnine.filter(nekretnina => req.body.mikrolokacija.includes(nekretnina.get("mikrolokacija")));
        }
        if(req.body.cena != null) {
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("cena") < req.body.cena);
        }
        if(req.body.kvadratura != null) {
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("kvadratura") > req.body.kvadratura);
        }
        if(req.body.brSoba != null) {
            nekretnine = nekretnine.filter(nekretnina => nekretnina.get("brSoba") == req.body.brSoba);
        }
        res.json(nekretnine);
    }

    getPoMikrolokaciji = (req: express.Request, res: express.Response)=>{
        //console.log("dosaaaooo");
        Nekretnina.find({'mikrolokacija':req.body.mikrolokacija},(err, nekretnine)=>{
            if(err) console.log(err);
            else res.json(nekretnine);
        });

    }

    getPoTipuIMikrolokaciji = (req: express.Request, res: express.Response)=>{
        Nekretnina.find({'tip':req.body.tip,'mikrolokacija':req.body.mikrolokacija},(err, nekretnine)=>{
            if(err) console.log(err);
            else res.json(nekretnine);
        });

    }

    naprednaPretraga = async (req: express.Request, res: express.Response) => {
        let nekretnine = await Nekretnina.find({'prodato':'ne'}).exec();
        nekretnine = nekretnine.filter(nekretnina => nekretnina.get("cena") > req.body.cenaOd && nekretnina.get("cena") < req.body.cenaDo);
        nekretnine = nekretnine.filter(nekretnina => nekretnina.get("kvadratura") > req.body.kvadraturaOd && nekretnina.get("kvadratura") < req.body.kvadraturaDo);
        nekretnine = nekretnine.filter(nekretnina => nekretnina.get("brSoba") > req.body.brSobaOd && nekretnina.get("brSoba") < req.body.brSobaDo);
        nekretnine = nekretnine.filter(nekretnina => nekretnina.get("godIzgradnje") > req.body.godIzgradnjeOd && nekretnina.get("godIzgradnje") < req.body.godIzgradnjeDo);
        if(req.body.oglasivac.length != 0) {
            //console.log(req.body.oglasivac);
            nekretnine = nekretnine.filter(nekretnina => req.body.oglasivac.includes(nekretnina.get("tipOglasivaca")));
        }
        if(req.body.stanje.length != 0) {
            nekretnine = nekretnine.filter(nekretnina => req.body.stanje.includes(nekretnina.get("stanje")));
        }
        if(req.body.grejanje.length != 0) {
            nekretnine = nekretnine.filter(nekretnina => req.body.grejanje.includes(nekretnina.get("tipGrejanja")));
        }
        nekretnine = nekretnine.filter(nekretnina => nekretnina.get("sprat") > req.body.spratOd && nekretnina.get("sprat") < req.body.spratDo);
        nekretnine = nekretnine.filter(nekretnina => nekretnina.get("mesecneRezije") > req.body.mesecneRezijeOd && nekretnina.get("mesecneRezije") < req.body.mesecneRezijeDo);
        //console.log(req.body.karakteristike != '');
        if(req.body.karakteristike != '') {
            nekretnine = nekretnine.filter(nekretnina => req.body.karakteristike.includes(nekretnina.get("karakteristike")));
        }
        res.json(nekretnine);
        return;
    }

    getNekretnineOglasivaca = (req: express.Request, res: express.Response)=>{

        Nekretnina.find({'oglasivac':req.body.oglasivac},(err, nekretnine)=>{
            if(err) console.log(err);
            else res.json(nekretnine);
        });

    }

    addNekretnina = (req: express.Request, res: express.Response)=>{

        let nekretnina = new Nekretnina({idN:parseInt(req.body.idN), naziv:req.body.naziv,tip:req.body.tip,grad:req.body.grad,opstina:req.body.opstina,mikrolokacija:req.body.mikrolokacija,ulica:req.body.ulica,kvadratura:parseInt(req.body.kvadratura),cena:parseInt(req.body.cena),oglasivac:req.body.oglasivac,godIzgradnje:req.body.godIzgradnje,stanje:req.body.stanje,tipGrejanja:req.body.tipGrejanja,sprat:parseInt(req.body.sprat),ukupnaSpratnost:parseInt(req.body.ukupnaSpratnost),parking:req.body.parking,opis:req.body.opis,karakteristike:req.body.karakteristike,slike:req.body.slike,linije:req.body.linije,brSoba:parseInt(req.body.brSoba),mesecneRezije:parseInt(req.body.mesecneRezije),tipOglasivaca:req.body.tipOglasivaca,prodato:req.body.prodato,izmenaDatum:"",izmenaVreme:""});

        Nekretnina.insertMany(nekretnina);
        res.json(nekretnina);
    }

    changeNekretnina = (req: express.Request, res: express.Response)=>{

        let nekretnina = new Nekretnina({idN:parseInt(req.body.idN), naziv:req.body.naziv,tip:req.body.tip,grad:req.body.grad,opstina:req.body.opstina,mikrolokacija:req.body.mikrolokacija,ulica:req.body.ulica,kvadratura:parseInt(req.body.kvadratura),cena:parseInt(req.body.cena),oglasivac:req.body.oglasivac,godIzgradnje:req.body.godIzgradnje,stanje:req.body.stanje,tipGrejanja:req.body.tipGrejanja,sprat:parseInt(req.body.sprat),ukupnaSpratnost:parseInt(req.body.ukupnaSpratnost),parking:req.body.parking,opis:req.body.opis,karakteristike:req.body.karakteristike,slike:req.body.slike,linije:req.body.linije,brSoba:parseInt(req.body.brSoba),mesecneRezije:parseInt(req.body.mesecneRezije),tipOglasivaca:req.body.tipOglasivaca,prodato:req.body.prodato,izmenaDatum:req.body.izmenaDatum,izmenaVreme:req.body.izmenaVreme});

        Nekretnina.collection.updateOne({'idN':parseInt(req.body.idN)}, {$set: {idN:parseInt(req.body.idN), naziv:req.body.naziv,tip:req.body.tip,grad:req.body.grad,opstina:req.body.opstina,mikrolokacija:req.body.mikrolokacija,ulica:req.body.ulica,kvadratura:parseInt(req.body.kvadratura),cena:parseInt(req.body.cena),oglasivac:req.body.oglasivac,godIzgradnje:req.body.godIzgradnje,stanje:req.body.stanje,tipGrejanja:req.body.tipGrejanja,sprat:parseInt(req.body.sprat),ukupnaSpratnost:parseInt(req.body.ukupnaSpratnost),parking:req.body.parking,opis:req.body.opis,karakteristike:req.body.karakteristike,slike:req.body.slike,linije:req.body.linije,brSoba:parseInt(req.body.brSoba),mesecneRezije:parseInt(req.body.mesecneRezije),tipOglasivaca:req.body.tipOglasivaca,prodato:req.body.prodato,izmenaDatum:req.body.izmenaDatum,izmenaVreme:req.body.izmenaVreme}});
        res.json(nekretnina);
    }

    changeProdato = (req: express.Request, res: express.Response)=>{

        Nekretnina.collection.updateOne({'idN':parseInt(req.body.idN)}, {$set: {prodato:req.body.prodato}});
        res.json("ok");
    }

    getPoTipuOglasivaca = (req: express.Request, res: express.Response)=>{
        Nekretnina.find({'tipOglasivaca':req.body.tip},(err, nekretnine)=>{
            if(err) console.log(err);
            else res.json(nekretnine);
        });

    }

    getNekretnineGrad = (req: express.Request, res: express.Response)=>{
        Nekretnina.find({'grad':req.body.grad,'mikrolokacija':req.body.naziv,'opstina':req.body.opstina,'ulica':req.body.ulica,'prodato':'ne'},(err, nekretnine)=>{
            if(err) console.log(err);
            else res.json(nekretnine);
        });

    }
}