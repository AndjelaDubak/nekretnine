import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(sessionStorage.getItem('ulogovan'));
  }

  korisnik: Korisnik;

  odjava() {
    sessionStorage.removeItem('ulogovan');
    sessionStorage.removeItem('omiljene');
  }

}
