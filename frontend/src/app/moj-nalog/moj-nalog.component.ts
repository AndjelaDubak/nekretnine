import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';

@Component({
  selector: 'app-moj-nalog',
  templateUrl: './moj-nalog.component.html',
  styleUrls: ['./moj-nalog.component.css']
})
export class MojNalogComponent implements OnInit {

  constructor(private router:Router) {
    this.nekretnine = [];
   }

  ngOnInit(): void {
    this.korisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.nekretnine = JSON.parse(sessionStorage.getItem('omiljene'));
    if(this.nekretnine == null) {
      this.nekretnine = [];
    }
    
  }

  korisnik: Korisnik;
  nekretnine: Nekretnina[];

  nekretnina(nekretnina) {
    sessionStorage.setItem('nekretnina',JSON.stringify(nekretnina));
    this.router.navigate(['/nekretnina']);
  }

  izbaci(n) {
    let omiljene = JSON.parse(sessionStorage.getItem('omiljene'));
    for(let i=0;i<omiljene.length;i++) {
      if(omiljene[i].naziv == n.naziv) {
        omiljene.splice(i,1);
      }
    }
    sessionStorage.setItem('omiljene',JSON.stringify(omiljene));
    this.router.navigate(['/mojNalog']);
  }

}
