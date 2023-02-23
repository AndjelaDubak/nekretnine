import * as express from 'express';
import Mikrolokacija from '../models/mikrolokacija';

export class MikrolokacijaController {
    getMikrolokacije = (req: express.Request, res: express.Response)=>{

        Mikrolokacija.find({},(err, mikrolokacije)=>{
            if(err) console.log(err);
            else res.json(mikrolokacije);
        });

    }

    addMikrolokacija = (req: express.Request, res: express.Response)=>{

        let m = new Mikrolokacija({naziv:req.body.naziv,grad:req.body.grad,opstina:req.body.opstina,ulica:req.body.ulica})

        Mikrolokacija.insertMany(m);
        res.json(m);
    }

    deleteMikrolokacija = (req: express.Request, res: express.Response)=>{

        let m = new Mikrolokacija({naziv:req.body.naziv,grad:req.body.grad,opstina:req.body.opstina,ulica:req.body.ulica})
        Mikrolokacija.collection.deleteMany({naziv:req.body.naziv,grad:req.body.grad,opstina:req.body.opstina,ulica:req.body.ulica});
        res.json(m);
    }

    getJedinstveneMikrolokacije = (req: express.Request, res: express.Response)=>{

        Mikrolokacija.distinct('naziv',(err, mikrolokacije)=>{
            if(err) console.log(err);
            else res.json(mikrolokacije);
        });
    }

    getJedinstveneGradove = (req: express.Request, res: express.Response)=>{

        Mikrolokacija.distinct('grad',(err, mikrolokacije)=>{
            if(err) console.log(err);
            else res.json(mikrolokacije);
        });
    }

    getJedinstveneOpstine = (req: express.Request, res: express.Response)=>{

        Mikrolokacija.distinct('opstina',(err, mikrolokacije)=>{
            if(err) console.log(err);
            else res.json(mikrolokacije);
        });
    }

}