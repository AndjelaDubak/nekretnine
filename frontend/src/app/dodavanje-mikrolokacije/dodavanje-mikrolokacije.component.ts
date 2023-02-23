import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mikrolokacija } from '../models/mikrolokacija';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-dodavanje-mikrolokacije',
  templateUrl: './dodavanje-mikrolokacije.component.html',
  styleUrls: ['./dodavanje-mikrolokacije.component.css']
})
export class DodavanjeMikrolokacijeComponent implements OnInit {

  constructor(private prijavaServis:PrijavaService, private router:Router) { }

  ngOnInit(): void {
    this.mikrolokacije = [];
    this.prijavaServis.getMikrolokacije().subscribe((mikr:Mikrolokacija[])=>{
      this.mikrolokacije = mikr;
      this.mikrolokacije = Array.from(new Set(this.mikrolokacije.map(a => a.opstina)))
      .map(id => {
        return this.mikrolokacije.find(a => a.opstina === id)
      })
    })
    this.mikrolokacija = '';
    this.opstina = '';
    this.grad = '';
    this.poruka = '';
    this.ulica = '';
  }

  mikrolokacije: Mikrolokacija[];
  grad:string;
  opstina:string;
  mikrolokacija:string;
  ulica:string;
  poruka: string;

  addMikrolokacija(m) {
    for(let i=0;i<this.mikrolokacije.length;i++) {
      if(this.mikrolokacije[i].naziv == this.mikrolokacija && this.mikrolokacije[i].ulica == this.ulica){
        this.poruka = 'Već postoji ta mikrolokacija i ulica!';
        return false;
      }
    }
    this.prijavaServis.addMikrolokacija(this.mikrolokacija,m.grad,m.opstina,this.ulica).subscribe((m:Mikrolokacija)=>{
      this.router.navigate(['/administrator']);
    });
    return true;
  }

}
