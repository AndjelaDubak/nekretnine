import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrijavaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  prijava(korIme){
    const data={
      korIme: korIme
    }

    return this.http.post(`${this.uri}/korisnik/prijava`, data);
  }

  getAgencije() {
    return this.http.get(`${this.uri}/korisnik/getAgencije`);
  }

  getKorisnike() {
    return this.http.get(`${this.uri}/korisnik/getKorisnike`);
  }

  registracija(ime,prezime,korIme,lozinka,grad,datumRodjenja,telefon,email,agencija,brojLicence,tip,slika,odobren) {
    const data={
      ime:ime,
      prezime:prezime,
      korIme: korIme,
      lozinka: lozinka,
      grad: grad,
      datumRodjenja: datumRodjenja,
      telefon: telefon,
      email: email,
      agencija: agencija,
      brojLicence: brojLicence,
      tip: tip,
      odobren : odobren,
      slika:slika
    }

    return this.http.post(`${this.uri}/korisnik/registracija`, data);
  }

  getNekretnine() {
    return this.http.get(`${this.uri}/korisnik/getNekretnine`); 
  }

  promenaLozinke(korIme,lozinka) {
    const data = {
      korIme:korIme,
      lozinka:lozinka
    }

    return this.http.post(`${this.uri}/korisnik/promenaLozinke`, data);
  }

  getNeodobreneKorisnike() {
    return this.http.get(`${this.uri}/korisnik/getNeodobreneKorisnike`); 
  }

  prihvatiKorisnika(korIme) {
    const data = {
      korIme:korIme
    }

    return this.http.post(`${this.uri}/korisnik/prihvatiKorisnika`, data);
  }

  deleteKorisnik(korIme) {
    const data = {
      korIme:korIme
    }

    return this.http.post(`${this.uri}/korisnik/deleteKorisnik`, data);
  }

  changeKorisnikAdm(ime,prezime,korIme,lozinka,grad,datumRodjenja,telefon,email,agencija,brojLicence,tip,slika,odobren) {
    const data={
      ime:ime,
      prezime:prezime,
      korIme: korIme,
      lozinka: lozinka,
      grad: grad,
      datumRodjenja: datumRodjenja,
      telefon: telefon,
      email: email,
      agencija: agencija,
      brojLicence: brojLicence,
      tip: tip,
      odobren : odobren,
      slika:slika
    }

    return this.http.post(`${this.uri}/korisnik/changeKorisnikAdm`, data);
  }

  addAgencija(naziv,grad,adresa,telefon,PIB) {
    const data={
      naziv:naziv,
      grad:grad,
      adresa:adresa,
      telefon:telefon,
      PIB:PIB
    }

    return this.http.post(`${this.uri}/korisnik/addAgencija`, data);
  }

  getMikrolokacije() {
    return this.http.get(`${this.uri}/korisnik/getMikrolokacije`);
  }

  addMikrolokacija(naziv,grad,opstina,ulica) {
    const data={
      naziv:naziv,
      grad:grad,
      opstina:opstina,
      ulica:ulica
    }

    return this.http.post(`${this.uri}/korisnik/addMikrolokacija`, data);
  }

  getNekretnineGrad(naziv,grad,opstina,ulica) {
    const data={
      naziv:naziv,
      grad:grad,
      opstina:opstina,
      ulica:ulica
    }

    return this.http.post(`${this.uri}/oglasivac/getNekretnineGrad`, data);
  }

  deleteMikrolokacija(naziv,grad,opstina,ulica) {
    const data={
      naziv:naziv,
      grad:grad,
      opstina:opstina,
      ulica:ulica
    }

    return this.http.post(`${this.uri}/korisnik/deleteMikrolokacija`, data);
  }

  getJedinstveneMikrolokacije() {
    return this.http.get(`${this.uri}/korisnik/getJedinstveneMikrolokacije`);
  }

  getJedinstveneGradove() {
    return this.http.get(`${this.uri}/korisnik/getJedinstveneGradove`);
  }

  getJedinstveneOpstine() {
    return this.http.get(`${this.uri}/korisnik/getJedinstveneOpstine`);
  }

}
