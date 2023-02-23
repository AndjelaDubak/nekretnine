import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { OglasivacService } from '../servers/oglasivac.service';

@Component({
  selector: 'app-oglasivac',
  templateUrl: './oglasivac.component.html',
  styleUrls: ['./oglasivac.component.css']
})
export class OglasivacComponent implements OnInit {

  constructor(private oglasivacServis: OglasivacService,private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
    this.nekretnine = [];
    this.oglasivacServis.getNekretnineOglasivaca(this.korisnik.korIme).subscribe((nekretnine:Nekretnina[])=>{
      this.nekretnine = nekretnine;
    })
  }

  korisnik: Korisnik;
  nekretnine: Nekretnina[];

  nekretnina(nekretnina) {
    sessionStorage.setItem('nekretnina',JSON.stringify(nekretnina));
    this.router.navigate(['/nekretnina']);
  }

  izmeni(nekretnina) {
    sessionStorage.setItem('izmena',JSON.stringify(nekretnina));
    this.router.navigate(['/izmenaNekretnine']);
  }

  prodato(nekretnina) {
    let trenutno = new Date();
    this.oglasivacServis.changeProdato(nekretnina.idN,trenutno.getMonth()+1).subscribe((ok:String)=>{
      
    })
  }

}
