import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { Agencija } from '../models/agencija';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { OglasivacService } from '../servers/oglasivac.service';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-moj-nalog',
  templateUrl: './moj-nalog-o.component.html',
  styleUrls: ['./moj-nalog-o.component.css']
})
export class MojNalogOComponent implements OnInit {

  constructor(private prijavaServis:PrijavaService,private oglasivacServis:OglasivacService,private router:Router) {
    this.nekretnine = [];
   }

  ngOnInit(): void {
    this.mikrolokacija = '';
    this.korisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.greska = '';
    this.telefon = this.korisnik.telefon;
    this.email = this.korisnik.email;
    this.agencija = this.korisnik.agencija;
    this.zaPrikaz = false;
    this.agentNekretnine = [];
    this.prikaz = false;
    if(this.nekretnine == null) {
      this.nekretnine = [];
    }
    this.prijavaServis.getAgencije().subscribe((agencije: Agencija[])=>{
      this.agencije = agencije;
    })
    this.prijavaServis.getNekretnine().subscribe((nekretnine: Nekretnina[])=>{
      this.nekretnine = nekretnine;
      this.nekrJedinstvene = this.nekretnine;
      this.nekrJedinstvene = Array.from(new Set(this.nekrJedinstvene.map(a => a.mikrolokacija)))
      .map(id => {
        return this.nekrJedinstvene.find(a => a.mikrolokacija === id)
      })
    })
    
  }

  korisnik: Korisnik;
  nekretnine: Nekretnina[];
  nekrJedinstvene: Nekretnina[];
  agencije: Agencija[];
  agencija: string;
  greska: string;
  telefon: string;
  email: string;
  mikrolokacija: string;
  zaPrikaz: boolean;
  agentNekretnine: Nekretnina[];
  prikaz: boolean;

  changeKorisnik() {
    //alert(this.agencija);
    if(/^\d\d\d-\d\d\d-\d{3,4}$/.test(this.telefon) == false) {
      this.greska = 'Unesite telefon u formatu: xxx-xxx-xxx(x)';
      return false;
    }
    if(/\w@\w/.test(this.email) == false) {
      this.greska = 'Unesite validan mejl sa @!';
      return false;
    }
    this.oglasivacServis.changeKorisnik(this.korisnik.korIme,this.telefon,this.email,this.agencija).subscribe((ok:String)=>{
      this.prijavaServis.prijava(this.korisnik.korIme).subscribe((kor:Korisnik)=>{
        this.korisnik = kor;
        sessionStorage.setItem('ulogovan',JSON.stringify(this.korisnik));
      })
    })
    return true;
  }

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [0,0,0,0,0,0,0,0,0,0,0,0]}
  ];

  public chartDatasets1: Array<any> = [
    { data: [0,0,0,0,0,0,0,0,0,0,0,0]}
  ];

  public chartLabels: Array<any> = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 153, 153, 0.5)',
        'rgba(51, 255, 255, 0.5)',
        'rgba(153, 255, 51, 0.5)',
        'rgba(204, 153, 255, 0.5)',
        'rgba(255, 204, 153, 0.5)',
        'rgba(51, 153, 255, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 153, 153, 1)',
        'rgba(51, 255, 255, 1)',
        'rgba(153, 255, 51, 1)',
        'rgba(204, 153, 255, 1)',
        'rgba(255, 204, 153, 1)',
        'rgba(51, 153, 255, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  prikazi() {
    //console.log(this.chartDatasets1[0].data[0]);
    //alert(this.agentNekretnine[0].naziv);
    this.oglasivacServis.getPoMikrolokaciji(this.mikrolokacija).subscribe((nekretnine:Nekretnina[])=>{
      //console.log(nekretnine.length);
      for(let i=0;i<nekretnine.length;i++){
        if(nekretnine[i].prodato != 'ne') {
          //console.log(nekretnine[i].prodato);
          this.chartDatasets[0].data[parseInt(nekretnine[i].prodato)-1] += 1;
        }
      }
      this.zaPrikaz = true;
    })
  }

  prikaziAgencija() {
    this.oglasivacServis.getPoTipuOglasivaca("Agencija").subscribe(async (nekr:Nekretnina[])=>{
      for(let i=0;i<nekr.length;i++) {
        let kor = await firstValueFrom<any>(this.prijavaServis.prijava(nekr[i].oglasivac));
        if(kor.agencija == this.korisnik.agencija && nekr[i].prodato!='ne') {
          this.chartDatasets1[0].data[parseInt(nekr[i].prodato)-1] += 1;
          console.log(this.chartDatasets1[0].data);
        }
      }
      this.prikaz = true;
    })
  }

}
