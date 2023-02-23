import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private prijavaServis:PrijavaService, private router:Router) { }

  ngOnInit(): void {
    this.prijavaServis.getKorisnike().subscribe((korisnici:Korisnik[])=>{
      this.korisnici = korisnici;
    })
  }

  korisnici: Korisnik[];

  prihvati(korisnik) {
    this.prijavaServis.prihvatiKorisnika(korisnik.korIme).subscribe((ok:String)=>{

    })
  }

  odbij(korisnik) {
    this.prijavaServis.deleteKorisnik(korisnik.korIme).subscribe((ok:String)=>{

    })
  }

  izmeni(n) {
    sessionStorage.setItem('izmenaKorisnika',JSON.stringify(n));
    this.router.navigate(['/izmenaKorisnika']);
  }

  obrisi(n) {
    this.prijavaServis.deleteKorisnik(n.korIme).subscribe((ok:String)=>{
      
    })
  }

}
