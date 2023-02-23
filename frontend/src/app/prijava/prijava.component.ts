import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private prijavaServis: PrijavaService, private router: Router) { }

  ngOnInit(): void {
    this.korIme = '';
    this.lozinka = '';
    this.poruka = '';
    this.prijavaServis.getNekretnine().subscribe((nekretnine:Nekretnina[])=>{
      this.nekretnine = nekretnine;
      this.nekretnine.reverse();
    });
  }

  korIme: string;
  lozinka: string;
  poruka: string;
  nekretnine: Nekretnina[];

  prijava() {
    this.prijavaServis.prijava(this.korIme).subscribe((user:Korisnik)=>{
      if(this.korIme=='' && this.lozinka=='') {
        this.poruka = "Popunite sva polja!";
      }
      else if (this.korIme==''){
        this.poruka = "Unesite korisničko ime!";
      }
      else if(this.lozinka=='') {
        this.poruka = "Unesite lozinku!";
      }
      else if(user.odobren == 'ne') {
        this.poruka = 'Nalog još uvek nije odobren!';
      }
      else {
        if(user){
          if(user.lozinka == this.lozinka) {
            if(user.tip=='kupac'){
              this.router.navigate(['/kupac']);
            }
            else if(user.tip=='administrator'){
              this.router.navigate(['/administrator']);
            }
            else {
              this.router.navigate(['/oglasivac']);
            }
            sessionStorage.setItem('ulogovan',JSON.stringify(user));
          }
          else {
            this.poruka = 'Pogrešna lozinka!';
          }
        }
        else this.poruka = "Ne postoji korisnik!";
      }      
    })
  }

}
