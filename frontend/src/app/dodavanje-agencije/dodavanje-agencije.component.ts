import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencija } from '../models/agencija';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-dodavanje-agencije',
  templateUrl: './dodavanje-agencije.component.html',
  styleUrls: ['./dodavanje-agencije.component.css']
})
export class DodavanjeAgencijeComponent implements OnInit {

  constructor(private prijavaServis:PrijavaService, private router:Router) { }

  ngOnInit(): void {
    this.prijavaServis.getAgencije().subscribe((agencije:Agencija[])=>{
      this.agencije = agencije;
    })
    this.naziv = '';
    this.adresa = '';
    this.grad = '';
    this.telefon = '';
    this.PIB = '';
    this.poruka='';
  }

  agencije: Agencija[];
  naziv:string;
  adresa:string;
  grad:string;
  telefon:string;
  PIB: string;
  poruka:string;

  addAgencija() {
    //alert(this.adresa);
    for(let i=0;i<this.agencije.length;i++) {
      if(this.agencije[i].naziv == this.naziv) {
        this.poruka = 'Već postoji agencija sa tim nazivom!';
        return false;
      }
    }
    if(/^\d\d\d-\d\d\d-\d{3,4}$/.test(this.telefon) == false) {
      this.poruka = 'Unesite telefon u formatu: xxx-xxx-xxx(x)';
      return false;
    }
    this.prijavaServis.addAgencija(this.naziv,this.grad,this.adresa,this.telefon,this.PIB).subscribe((ok:String)=>{
      this.router.navigate(['/administrator']);
    })
    return true;
  }

}
