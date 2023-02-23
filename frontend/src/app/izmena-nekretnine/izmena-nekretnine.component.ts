import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Linija } from '../models/linija';
import { Nekretnina } from '../models/nekretnina';
import { OglasivacService } from '../servers/oglasivac.service';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-izmena-nekretnine',
  templateUrl: './izmena-nekretnine.component.html',
  styleUrls: ['./izmena-nekretnine.component.css']
})
export class IzmenaNekretnineComponent implements OnInit {
  constructor(private prijavaServis:PrijavaService,private oglasivacServis: OglasivacService,private router: Router) { }

  @ViewChild('Image') imgType:ElementRef;

  ngOnInit(): void {
    this.nekretnina = JSON.parse(sessionStorage.getItem('izmena'));
    this.korisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.oglasivac = this.korisnik.korIme;
    this.slike = this.nekretnina.slike;
    this.greska = '';
    this.naziv = this.nekretnina.naziv;
    this.tip = this.nekretnina.tip;
    this.grad = this.nekretnina.grad;
    this.opstina = this.nekretnina.opstina;
    this.mikrolokacija = this.nekretnina.mikrolokacija;
    this.ulica = this.nekretnina.ulica;
    this.kvadratura = this.nekretnina.kvadratura.toString();
    this.cena = this.nekretnina.cena.toString();
    this.godIzgradnje = this.nekretnina.godIzgradnje.toString();
    this.stanje = this.nekretnina.stanje;
    this.tipGrejanja = this.nekretnina.tipGrejanja;
    this.karakteristike = this.nekretnina.karakteristike.split(',');;
    this.sprat = this.nekretnina.sprat.toString();
    this.ukupnaSpratnost = this.nekretnina.ukupnaSpratnost.toString();
    this.parking = this.nekretnina.parking;
    this.opis = this.nekretnina.opis;
    this.linije = this.nekretnina.linije.split(',');
    this.brSoba = this.nekretnina.brSoba.toString();
    this.mesecneRezije = this.nekretnina.mesecneRezije.toString();
    this.prodato = this.nekretnina.prodato;
    if(this.korisnik.agencija != '') {
      this.tipOglasivaca = 'Agencija';
    }
    else {
      this.tipOglasivaca = 'Vlasnik';
    }
    this.oglasivacServis.getLinije().subscribe((linije:Linija[])=>{
      this.linijePrikaz = linije;
    })
    this.prijavaServis.getNekretnine().subscribe((nekretnine:Nekretnina[])=>{
      this.nekretnine = nekretnine;
      this.nekretnine.reverse();
    })
  }
  
  korisnik: Korisnik;
  naziv: string;
  tip: string;
  grad: string;
  opstina: string;
  mikrolokacija: string;
  ulica: string;
  kvadratura: string;
  cena: string;
  oglasivac: string;
  godIzgradnje: string;
  stanje: string;
  tipGrejanja: string;
  sprat: string;
  ukupnaSpratnost: string;
  parking: string;
  opis: string;
  karakteristike: string[];
  slike: String[];
  linije: string[];
  brSoba: string;
  mesecneRezije: string;
  tipOglasivaca: string;
  prodato: string;
  greska: string;
  linijePrikaz: Linija[];
  nekretnine: Nekretnina[];
  nekretnina: Nekretnina;

  fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      if(this.slike.length < 3 || this.slike.length>6) {
        this.greska = 'Dozvoljeno je od 3 do 6 slika!';
        return false;
      }
      for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[i]);
          console.log(event.target.files[i].name);
          this.slike.push(event.target.files[i].name);
      }
    }
    return true;
  }

  onChangeLinije(vrednost, event) {
    if(event.target.checked) {
      this.linije.push(vrednost);
    }
    else {
      for(let i=0;i<this.linije.length;i++) {
        if(this.linije[i] == vrednost) {
          this.linije.splice(i,1);
        }
      }
    }
  }

  onChangeStanje(vrednost, event) {
    if(event.target.checked) {
      this.stanje = vrednost;
      //console.log(this.stanje);
    }
  }

  onChangeGrejanje(vrednost, event) {
    //alert("jndjka");
    if(event.target.checked) {
      this.tipGrejanja = vrednost;
      //console.log(this.oglasivac[0]);
    }
  }

  onChangeKarakteristike(vrednost, event) {
    //alert("jndjka");
    if(event.target.checked) {
      this.karakteristike.push(vrednost);
      //console.log(this.oglasivac[0]);
    }
    else {
      //alert("kjadad");
      for(let i=0;i<this.karakteristike.length;i++) {
        if(this.karakteristike[i] == vrednost) {
          this.karakteristike.splice(i,1);
        }
      }
    }
  }


  postoji(vrednost) {
    //alert(vrednost);
    let karak = this.nekretnina.karakteristike.split(',');
    return karak.includes(vrednost);
    //alert(karak.includes(vrednost));
  }

  postojiStanje(vrednost) {
    return this.stanje.includes(vrednost);
  }

  postojiGrejanje(vrednost) {
    return this.tipGrejanja.includes(vrednost);
  }

  postojiLinija(vrednost) {
    let linije = this.nekretnina.linije.split(', ');
    return linije.includes(vrednost);
    //alert(karak.includes(vrednost));
  }



  changeNekretnina() {
    if(this.naziv == '' || this.tip == '' || this.grad == '' || this.opstina == '' || this.mikrolokacija == '' || this.ulica == '' || this.kvadratura == '' || this.cena == '' || this.godIzgradnje == '' || this.stanje == '' || this.tipGrejanja == '' || this.sprat == '' || this.ukupnaSpratnost == '' || this.parking == '' || this.opis == '' || this.brSoba == '' || this.mesecneRezije == '') {
      this.greska = 'Popunite sva polja!';
      return false;
    }
    let trenutno = new Date();
    let datum = trenutno.getMonth() + 1;
    let trDatum = '' + trenutno.getFullYear() + '-' + datum + '-' + trenutno.getDate();
    let trVreme = '' + trenutno.getHours() + ':' + trenutno.getMinutes();
    let izmenaDatum = this.nekretnina.izmenaDatum.split('-');
    let izmenaVreme = this.nekretnina.izmenaVreme.split(':');
    //alert(izmenaDatum[1]);
    if(trenutno.getFullYear()==parseInt(izmenaDatum[0]) && (trenutno.getMonth()+1)==parseInt(izmenaDatum[1]) && trenutno.getDate()==parseInt(izmenaDatum[2])) {
      let minuti = parseInt(izmenaVreme[0])*60 + parseInt(izmenaVreme[1]);
      //alert((trenutno.getHours()*60+trenutno.getMinutes())-minuti);
      if(((trenutno.getHours()*60+trenutno.getMinutes())-minuti) < 60) {
        this.greska = 'Već ste vršili izmenu u poslednjih sat vremena!';
        return false;
      }
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
    let lin = '';
    for(let i=0;i<this.linije.length;i++){
      if(i==this.linije.length-1) {
        lin += this.linije[i];
      }
      else {
        lin += this.linije[i] + ','; 
      }
    }
    this.oglasivacServis.changeNekretnina(this.nekretnina.idN,this.naziv,this.tip,this.grad,this.opstina,this.mikrolokacija,this.ulica,this.kvadratura,this.cena,this.oglasivac,this.godIzgradnje,this.stanje,this.tipGrejanja,this.sprat,this.ukupnaSpratnost,this.parking,this.opis,karak,this.slike,lin,this.brSoba,this.mesecneRezije,this.tipOglasivaca,this.prodato,trDatum,trVreme).subscribe((nekretnina:Nekretnina)=>{
      sessionStorage.removeItem('izmena');
      this.router.navigate(['/oglasivac']);
    })
    return true;
  }

}
