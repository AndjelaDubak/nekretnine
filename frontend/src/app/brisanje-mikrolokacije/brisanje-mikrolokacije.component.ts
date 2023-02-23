import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mikrolokacija } from '../models/mikrolokacija';
import { Nekretnina } from '../models/nekretnina';
import { OglasivacService } from '../servers/oglasivac.service';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-brisanje-mikrolokacije',
  templateUrl: './brisanje-mikrolokacije.component.html',
  styleUrls: ['./brisanje-mikrolokacije.component.css']
})
export class BrisanjeMikrolokacijeComponent implements OnInit {

  constructor(private prijavaServis:PrijavaService, private oglasivacServis:OglasivacService,private router:Router) { }

  ngOnInit(): void {
    this.mikrolokacije = [];
    this.prijavaServis.getMikrolokacije().subscribe((mikr:Mikrolokacija[])=>{
      this.mikr = mikr;
        for(let i=0;i<this.mikr.length;i++) {
          //console.log(this.mikr);
          this.prijavaServis.getNekretnineGrad(this.mikr[i].naziv,this.mikr[i].grad,this.mikr[i].opstina,this.mikr[i].ulica).subscribe((nekr:Nekretnina[])=>{
            if(nekr.length==0) {
              //console.log(nekr);
              this.mikrolokacije.push(this.mikr[i]);
            }
          })
        }
    })
    this.mikrolokacija = '';
    this.opstina = '';
    this.grad = '';
    this.poruka = '';
    this.ulica = '';
  }

  mikr: Mikrolokacija[];
  nekretnine:Nekretnina[];
  mikrolokacije: Mikrolokacija[];
  grad:string;
  opstina:string;
  mikrolokacija:string;
  ulica:string;
  poruka: string;

  deleteMikrolokacija(m) {
    this.prijavaServis.deleteMikrolokacija(m.naziv,m.grad,m.opstina,m.ulica).subscribe((m:Mikrolokacija)=>{
      this.router.navigate(['/administrator']);
    });
    return true;
  }

}
