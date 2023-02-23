import * as express from 'express';
import Agencija from '../models/agencija';

export class AgencijaController{
    getAgencije = (req: express.Request, res: express.Response)=>{

        Agencija.find({},(err, agencije)=>{
            if(err) console.log(err);
            else res.json(agencije);
        });

    }

    getAgencijuPoNazivu = (req: express.Request, res: express.Response)=>{

        Agencija.findOne({'naziv':req.body.naziv},(err, agencija)=>{
            if(err) console.log(err);
            else res.json(agencija);
        });

    }

    addAgencija = (req: express.Request, res: express.Response)=>{
        //console.log(req.body.adresa);
        let agencija = new Agencija({naziv:req.body.naziv,grad:req.body.grad,adresa:req.body.adresa,telefon:req.body.telefon,PIB:req.body.PIB});
        Agencija.insertMany(agencija);
        res.json("ok");
    }


}