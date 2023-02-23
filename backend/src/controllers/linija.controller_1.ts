import * as express from 'express';
import Linija from '../models/linija';

export class LinijaController{
    getLinije = (req: express.Request, res: express.Response)=>{

        Linija.find({},(err, linije)=>{
            if(err) console.log(err);
            else res.json(linije);
        });

    }
}