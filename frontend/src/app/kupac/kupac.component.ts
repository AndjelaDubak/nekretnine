import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberLiteralType } from 'typescript';
import { Mikrolokacija } from '../models/mikrolokacija';
import { Nekretnina } from '../models/nekretnina';
import { KupacService } from '../servers/kupac.service';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private prijavaServis:PrijavaService,private kupacService: KupacService, private router: Router) { }

  ngOnInit(): void {
    this.poruka = '';
    this.tip = '';
    this.opstina = '';
    this.nekretnine = [];
    this.grad = '';
    this.mikrolokacija = '';
    this.opstina = '';
    this.prijavaServis.getJedinstveneMikrolokacije().subscribe((mikrolokacije:string[])=>{
      this.mikrolokacije = mikrolokacije;
      //this.mikrolokacija = this.mikrolokacije[0];
      //console.log(this.mikrolokacije);
    })
    this.prijavaServis.getJedinstveneGradove().subscribe((gradovi:string[])=>{
      this.gradovi = gradovi;
      //this.grad = this.gradovi[0];
      //console.log(this.gradovi);
    })
    this.prijavaServis.getJedinstveneOpstine().subscribe((opstine:string[])=>{
      this.opstine = opstine;
      //this.opstina = this.opstine[0];
    })
  }

  opstine:string[];
  gradovi: string[];
  mikrolokacije: string[];
  poruka: string;
  tip: string;
  grad:string;
  opstina:string;
  mikrolokacija:string;
  cena:number;
  kvadratura:number;
  brSoba:number;
  nekretnine:Nekretnina[];

  pretraga() {
    //alert(this.grad);
    if(this.tip == '') {
      this.poruka = 'Unesite tip nekretnine!';
      return false;
    }
    let grad = this.grad.split(',');
    let opstina = this.opstina.split(',');
    let mikrolokacija = this.mikrolokacija.split(',');
    this.kupacService.pretraga(this.tip,grad,opstina,mikrolokacija,this.cena,this.kvadratura,this.brSoba).subscribe((nekretnine: Nekretnina[])=>{
      this.nekretnine = nekretnine;
      sessionStorage.setItem('nekretnine', JSON.stringify(nekretnine));
      this.router.navigate(['/pretraga']);
      //console.log(this.nekretnine[0].naziv);
    })
    return true;
  }

}
