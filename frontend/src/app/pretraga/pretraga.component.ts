import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nekretnina } from '../models/nekretnina';
import { KupacService } from '../servers/kupac.service';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {

  constructor(private kupacServis:KupacService,private prijavaServis:PrijavaService,private router: Router) { 
    this.nekretnine = [];
    this.nekretnine1 = [];
    this.nekretnine2 = [];
    this.sveNekretnine = [];
    this.prvaStrana = true;
    this.prijavaServis.getNekretnine().subscribe((nekretnine:Nekretnina[])=>{
      this.sveNekretnine = nekretnine;
    })
  }

  ngOnInit(): void {
    this.prosecnaCena = 0;
    this.niz = [];
    this.nekretnine = JSON.parse(sessionStorage.getItem('nekretnine'));
    this.nekretnine1 = this.nekretnine.slice(0,10);
    this.nekretnine2 = this.nekretnine.slice(10,this.nekretnine.length);
    this.brStrana = Math.ceil(this.nekretnine.length / 10);
    for(let i=0; i<this.brStrana; i++) {
      this.niz[i] = i+1;
    }
    //alert(this.brStrana);
    //console.log(this.nekretnine);
  }

  brStrana: number;
  niz:Array<Number>;
  nekretnine: Nekretnina[];
  nekretnine1: Nekretnina[];
  nekretnine2: Nekretnina[];
  sveNekretnine: Nekretnina[];
  prosecnaCena: number;
  prvaStrana: boolean;
  drugaStrana: boolean;

  nekretnina(nekretnina) {
    sessionStorage.setItem('nekretnina',JSON.stringify(nekretnina));
    this.router.navigate(['/nekretnina']);
  }

  promeniStranu() {
    if(this.prvaStrana) {
      this.prvaStrana = false;
      this.drugaStrana = true;
    }
    else if(this.drugaStrana){
      this.drugaStrana = false;
      this.prvaStrana = true;
    }
    
  }

  getProsecnaCena(n) {
    this.prosecnaCena = 0;
    let k = 0;
    //console.log(this.sveNekretnine.length);
    for(let i=0;i<this.sveNekretnine.length;i++) {
      if(this.sveNekretnine[i].tip == n.tip && this.sveNekretnine[i].mikrolokacija == n.mikrolokacija) {
        let kvadrat = this.sveNekretnine[i].cena / this.sveNekretnine[i].kvadratura;
        this.prosecnaCena += kvadrat;
        k++;
      }
    }
    this.prosecnaCena = Math.floor(this.prosecnaCena/k);
    return this.prosecnaCena;
  }
 
}
