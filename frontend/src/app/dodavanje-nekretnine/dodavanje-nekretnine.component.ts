import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StringLiteralLike } from 'typescript';
import { Korisnik } from '../models/korisnik';
import { Linija } from '../models/linija';
import { Mikrolokacija } from '../models/mikrolokacija';
import { Nekretnina } from '../models/nekretnina';
import { OglasivacService } from '../servers/oglasivac.service';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-dodavanje-nekretnine',
  templateUrl: './dodavanje-nekretnine.component.html',
  styleUrls: ['./dodavanje-nekretnine.component.css']
})
export class DodavanjeNekretnineComponent implements OnInit {

  constructor(private prijavaServis:PrijavaService,private oglasivacServis: OglasivacService,private router: Router) { }

  @ViewChild('Image') imgType:ElementRef;

  ngOnInit(): void {
    this.korisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.oglasivac = this.korisnik.korIme;
    this.slike = [];
    this.greska = '';
    this.naziv = '';
    this.tip = '';
    this.grad = '';
    this.opstina = '';
    this.mikrolokacija = '';
    this.ulica = '';
    this.kvadratura = '';
    this.cena = '';
    this.godIzgradnje = '';
    this.stanje = '';
    this.tipGrejanja = '';
    this.karakteristike = [];
    this.sprat = '';
    this.ukupnaSpratnost = '';
    this.parking = '';
    this.opis = '';
    this.linije = [];
    this.brSoba = '';
    this.mesecneRezije = '';
    this.prodato = 'ne';
    this.dalje = false;
    this.validacija = '';
    this.dalje1 = false;
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
  slike: string[];
  linije: string[];
  brSoba: string;
  mesecneRezije: string;
  tipOglasivaca: string;
  prodato: string;
  greska: string;
  linijePrikaz: Linija[];
  nekretnine: Nekretnina[];
  nekretninaText : any;
  nekretninaJSON: any;
  dalje: boolean;
  validacija : string;
  dalje1:boolean;

  fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      if(filesAmount > 6 || filesAmount < 3) {
        this.greska = 'Dozvoljeno je uneti od 3 do 6 slika!'
        return false;
      }
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.readAsDataURL(event.target.files[i]);
              //console.log(event.target.files[i].name);
              this.slike.push(event.target.files[i].name);
      }
    }
    return true;
  }

  onChangeLinije(vrednost, event) {
    //alert("jndjka");
    if(event.target.checked) {
      this.linije.push(vrednost);
     // console.log(this.linije[0]);
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
  }

  addNekretnina() {
    if(this.naziv == '' || this.tip == '' || this.grad == '' || this.opstina == '' || this.mikrolokacija == '' || this.ulica == '' || this.kvadratura == '' || this.cena == '' || this.godIzgradnje == '' || this.stanje == '' || this.tipGrejanja == '' || this.sprat == '' || this.ukupnaSpratnost == '' || this.parking == '' || this.opis == '' || this.brSoba == '' || this.mesecneRezije == '') {
      this.greska = 'Popunite sva polja!';
      return false;
    }
    if(this.slike.length == 0) {
      this.greska = 'Unesite bar 3 slike!';
      return false;
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
    this.oglasivacServis.addNekretnina(this.nekretnine[0].idN+1,this.naziv,this.tip,this.grad,this.opstina,this.mikrolokacija,this.ulica,this.kvadratura,this.cena,this.oglasivac,this.godIzgradnje,this.stanje,this.tipGrejanja,this.sprat,this.ukupnaSpratnost,this.parking,this.opis,karak,this.slike,lin,this.brSoba,this.mesecneRezije,this.tipOglasivaca,this.prodato).subscribe((nekretnina:Nekretnina)=>{
      this.prijavaServis.addMikrolokacija(this.naziv,this.grad,this.opstina,this.ulica).subscribe((m:Mikrolokacija)=>{
        this.router.navigate(['/oglasivac']);
      })
    })
    return true;
  }

  file:any;
  fileChange(event) {
    //console.log(event.target.files[0]);
    this.file = event.target.files[0];
    return true;
  }

  daljeDugme() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.nekretninaText = fileReader.result;
      //console.log(fileReader.result);
    }
    fileReader.readAsText(this.file);
    this.dalje = true;
  }

  validirajJSON() {
    try {
      this.nekretninaJSON = JSON.parse(this.nekretninaText);
      this.dalje1 = true;
    } catch (e) {
      this.validacija = 'JSON format nije validan!';
      return false;
    }
    return true;
  }

  fileChangeSlika(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      if(filesAmount > 6 || filesAmount < 3) {
        this.validacija = 'Dozvoljeno je uneti od 3 do 6 slika!'
        return false;
      }
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[i]);
       // console.log(event.target.files[i].name);
        this.slike.push(event.target.files[i].name);
      }
    }
    this.validacija = '';
    return true;
  }

  addNekretninaJSON() {
    if(this.slike.length == 0) {
      this.validacija = 'Unesite bar 3 slike!';
      return false;
    }
    //alert(this.nekretninaJSON.Realestate.Name);
    this.oglasivacServis.addNekretnina(this.nekretnine[0].idN+1,this.nekretninaJSON.Realestate.Name,this.nekretninaJSON.Realestate.Type,this.nekretninaJSON.Realestate.City,this.nekretninaJSON.Realestate.Municipality,this.nekretninaJSON.Realestate.Microlocation,this.nekretninaJSON.Realestate.Street,this.nekretninaJSON.Realestate.Area,this.nekretninaJSON.Realestate.Price,this.oglasivac,this.nekretninaJSON.Realestate.ConstructionYear.toString(),this.nekretninaJSON.Realestate.State,this.nekretninaJSON.Realestate.Heating,this.nekretninaJSON.Realestate.Floor,this.nekretninaJSON.Realestate.TotalFloors,this.nekretninaJSON.Realestate.Parking.toLowerCase(),this.nekretninaJSON.Realestate.About,this.nekretninaJSON.Realestate.Characteristics,this.slike,this.nekretninaJSON.Realestate.Lines,this.nekretninaJSON.Realestate.Rooms,this.nekretninaJSON.Realestate.MonthlyUtilities,this.tipOglasivaca,this.prodato).subscribe((nekretnina:Nekretnina)=>{
      this.prijavaServis.addMikrolokacija(this.naziv,this.grad,this.opstina,this.ulica).subscribe((m:Mikrolokacija)=>{
        this.router.navigate(['/oglasivac']);
      })
    })
    return true; 
  }

}
