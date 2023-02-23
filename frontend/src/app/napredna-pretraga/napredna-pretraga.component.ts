import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nekretnina } from '../models/nekretnina';
import { KupacService } from '../servers/kupac.service';

@Component({
  selector: 'app-napredna-pretraga',
  templateUrl: './napredna-pretraga.component.html',
  styleUrls: ['./napredna-pretraga.component.css']
})
export class NaprednaPretragaComponent implements OnInit {

  constructor(private kupacServis:KupacService,private router: Router) { }

  ngOnInit(): void {
    this.oglasivac = [];
    this.stanje = [];
    this.grejanje = [];
    this.karakteristike = [];
  }

  cenaOd: number;
  cenaDo: number;
  kvadraturaOd: number;
  kvadraturaDo: number;
  brSobaOd: number;
  brSobaDo: number;
  godIzgradnjeOd: number;
  godIzgradnjeDo: number;
  spratOd: number;
  spratDo: number;
  mesecneRezijeOd: number;
  mesecneRezijeDo: number;
  oglasivac: String[];
  stanje: String[];
  grejanje: String[];
  karakteristike: String[];

  onChange(vrednost, event) {
    //alert("jndjka");
    if(event.target.checked) {
      this.oglasivac.push(vrednost);
      //console.log(this.oglasivac[0]);
    }
  }

  onChangeStanje(vrednost, event) {
    //alert("jndjka");
    if(event.target.checked) {
      this.stanje.push(vrednost);
      //console.log(this.oglasivac[0]);
    }
  }

  onChangeGrejanje(vrednost, event) {
    //alert("jndjka");
    if(event.target.checked) {
      this.grejanje.push(vrednost);
      //console.log(this.oglasivac[0]);
    }
  }

  onChangeKarakteristike(vrednost, event) {
    //alert("jndjka");
    if(event.target.checked) {
      this.karakteristike.push(vrednost);
      //console.log(this.oglasivac[0]);
    }
  }

  naprednaPretraga() {
    if(this.cenaOd == null) {
      this.cenaOd = 0;
    }
    if(this.cenaDo == null) {
      this.cenaDo = Number.MAX_SAFE_INTEGER;
    }
    if(this.kvadraturaOd == null) {
      this.kvadraturaOd = 0;
    }
    if(this.kvadraturaDo == null) {
      this.kvadraturaDo = Number.MAX_SAFE_INTEGER;
    }
    if(this.brSobaOd == null) {
      this.brSobaOd = 0;
    }
    if(this.brSobaDo == null) {
      this.brSobaDo = Number.MAX_SAFE_INTEGER;
    }
    if(this.godIzgradnjeOd == null) {
      this.godIzgradnjeOd = 0;
    }
    if(this.godIzgradnjeDo == null) {
      this.godIzgradnjeDo = Number.MAX_SAFE_INTEGER;
    }
    if(this.spratOd == null) {
      this.spratOd = 0;
    }
    if(this.spratDo == null) {
      this.spratDo = Number.MAX_SAFE_INTEGER;
    }
    if(this.mesecneRezijeOd == null) {
      this.mesecneRezijeOd = 0;
    }
    if(this.mesecneRezijeDo == null) {
      this.mesecneRezijeDo = Number.MAX_SAFE_INTEGER;
    }
    let karak = '';
    for(let i=0;i<this.karakteristike.length;i++){
      if(i==this.karakteristike.length-1) {
        karak += this.karakteristike[i];
      }
      else {
        karak += this.karakteristike[i] + ','; 
      }
    }
    //alert(karak);
    this.kupacServis.naprednaPretraga(this.cenaOd,this.cenaDo,this.kvadraturaOd,this.kvadraturaDo,this.brSobaOd,this.brSobaDo,this.godIzgradnjeOd,this.godIzgradnjeDo,this.spratOd,this.spratDo,this.mesecneRezijeOd,this.mesecneRezijeDo,this.oglasivac,this.stanje,this.grejanje,karak).subscribe((nekretnine:Nekretnina[])=>{
      sessionStorage.setItem('nekretnine', JSON.stringify(nekretnine));
      this.router.navigate(['/pretraga']);
    })
  }

}
