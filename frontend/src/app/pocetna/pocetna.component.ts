import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private prijavaServis: PrijavaService, private router: Router,private cdRef:ChangeDetectorRef) { 
    this.nekretnine = [];
  }

  ngOnInit(): void {
    this.prijavaServis.getNekretnine().subscribe((nekretnine:Nekretnina[])=>{
      nekretnine.reverse();
      for(let i=0;i<nekretnine.length;i++) {
        nekretnine[i].randomSlika = this.getRandomInt(nekretnine[i].slike.length);
      }
      this.nekretnine = nekretnine;
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
    this.cdRef.detectChanges();
  }

  korIme: string;
  lozinka: string;
  poruka: string;
  nekretnine: Nekretnina[];

  nekretnina(nekretnina) {
    sessionStorage.setItem('nekretnina',JSON.stringify(nekretnina));
    this.router.navigate(['/nekretnina']);
  }


}
