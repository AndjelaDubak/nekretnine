import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencija } from '../models/agencija';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { KupacService } from '../servers/kupac.service';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-nekretnina',
  templateUrl: './nekretnina.component.html',
  styleUrls: ['./nekretnina.component.css']
})
export class NekretninaComponent implements OnInit {

  constructor(private prijavaServis:PrijavaService, private kupacServis:KupacService, private router:Router) {}

  ngOnInit(): void {
    this.nijeUlogovan = true;
    this.korisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    if(this.korisnik != null) {
      this.nijeUlogovan = false;
    }
    this.agent = false;
    this.kliknuo = false;
    this.nekretnina = JSON.parse(sessionStorage.getItem('nekretnina'));
    this.fleg = true;
    this.karekteristike = this.nekretnina.karakteristike.split(',');
    for(let i=0;i<this.karekteristike.length;i++) {
      if(this.karekteristike[i]=='Terasa') {
        this.terasa = true;
      }
      if(this.karekteristike[i]=='Podrum') {
        this.podrum = true;
      }
      if(this.karekteristike[i]=='Internet') {
        this.internet = true;
      }
      if(this.karekteristike[i]=='Lodja') {
        this.lodja = true;
      }
      if(this.karekteristike[i]=='Garaza') {
        this.garaza = true;
      }
      if(this.karekteristike[i]=='Interfon') {
        this.interfon = true;
      }
      if(this.karekteristike[i]=='balkon') {
        this.balkon = true;
      }
      if(this.karekteristike[i]=='Basta') {
        this.basta = true;
      }
      if(this.karekteristike[i]=='Telefon') {
        this.telefon = true;
      }
      if(this.karekteristike[i]=='Lift') {
        this.lift = true;
      }
      if(this.karekteristike[i]=='Klima') {
        this.klima = true;
      }
    }
    this.prosecnaCena = 0;
    this.greska = '';
    this.cenaKvadrat = Math.floor(this.nekretnina.cena/this.nekretnina.kvadratura);
    this.prijavaServis.prijava(this.nekretnina.oglasivac).subscribe((korisnik:Korisnik)=>{
      this.oglasivac = korisnik;
      if(korisnik.agencija != '') {
        this.kupacServis.getAgencijuPoNazivu(korisnik.agencija).subscribe((agencija:Agencija)=>{
          //console.log(korisnik.agencija);
          this.agencija = agencija;
          this.agent = true;
          //console.log(this.agencija);
        })
      }
      else {
        this.prodavac = true;
      }
      //console.log(this.oglasivac.korIme);
    })
    this.kupacServis.getPoMikrolokaciji(this.nekretnina.mikrolokacija).subscribe((nekr:Nekretnina[])=>{
      for(let i=0;i<nekr.length;i++) {
        let kvadrat = nekr[i].cena / nekr[i].kvadratura;
        this.prosecnaCena += kvadrat;
      }
      this.prosecnaCena = Math.floor(this.prosecnaCena/nekr.length);
      console.log(this.prosecnaCena);
    })
  }

  fleg: boolean; 
  nekretnina: Nekretnina;
  prosecnaCena: number;
  cenaKvadrat: number;
  oglasivac: Korisnik;
  agent: boolean;
  prodavac: boolean;
  kliknuo: boolean;
  agencija: Agencija;
  terasa: boolean;
  podrum: boolean;
  internet: boolean;
  lodja: boolean;
  garaza:boolean;
  interfon:boolean;
  balkon: boolean;
  basta: boolean;
  telefon: boolean;
  lift: boolean;
  klima:boolean;
  karekteristike: String[];
  greska: string;
  korisnik: Korisnik;
  nijeUlogovan: boolean;

  kliknuto() {
    this.kliknuo = true;
    return true;
  }

  omiljeni() {
    let o = JSON.parse(sessionStorage.getItem('omiljene'));
    if(o==null) {
      o = [];
    }
    else {
      for(let i=0;i<o.length;i++) {
        if(o[i].naziv==this.nekretnina.naziv) {
          this.greska = 'Već ste dodali ovu nekretninu u omiljene!';
          //alert(this.greska);
          return false;
        }
      }
      if(o.length==5) {
        this.greska = 'Već imate 5 omiljenih nekretnina!';
        return false;
      }
    }
    o.push(this.nekretnina);
    sessionStorage.setItem('omiljene',JSON.stringify(o));
    return true;
  }

  prijava() {
    this.router.navigate(['/prijava']);
  }

}
