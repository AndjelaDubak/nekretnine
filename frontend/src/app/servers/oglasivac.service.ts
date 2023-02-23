import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OglasivacService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  getNekretnineOglasivaca(oglasivac) {
    const data={
      oglasivac:oglasivac
    }

    return this.http.post(`${this.uri}/oglasivac/getNekretnineOglasivaca`, data);
  }

  getLinije() {
    return this.http.get(`${this.uri}/oglasivac/getLinije`);
  }

  addNekretnina(idN,naziv,tip,grad,opstina,mikrolokacija,ulica,kvadratura,cena,oglasivac,godIzgradnje,stanje,tipGrejanja,sprat,ukupnaSpratnost,parking,opis,karakteristike,slike,linije,brSoba,mesecneRezije,tipOglasivaca,prodato) {
    const data={
      idN: idN,
      naziv: naziv,
      tip: tip,
      grad: grad,
      opstina: opstina,
      mikrolokacija: mikrolokacija,
      ulica: ulica,
      kvadratura: kvadratura,
      cena: cena,
      oglasivac: oglasivac,
      godIzgradnje: godIzgradnje,
      stanje: stanje,
      tipGrejanja: tipGrejanja,
      sprat: sprat,
      ukupnaSpratnost: ukupnaSpratnost,
      parking: parking,
      opis: opis,
      karakteristike: karakteristike,
      slike: slike,
      linije: linije,
      brSoba: brSoba,
      mesecneRezije: mesecneRezije,
      tipOglasivaca: tipOglasivaca,
      prodato: prodato
    }

    return this.http.post(`${this.uri}/oglasivac/addNekretnina`, data);
  }

  changeNekretnina(idN,naziv,tip,grad,opstina,mikrolokacija,ulica,kvadratura,cena,oglasivac,godIzgradnje,stanje,tipGrejanja,sprat,ukupnaSpratnost,parking,opis,karakteristike,slike,linije,brSoba,mesecneRezije,tipOglasivaca,prodato,izmenaDatum,izmenaVreme) {
    const data={
      idN: idN,
      naziv: naziv,
      tip: tip,
      grad: grad,
      opstina: opstina,
      mikrolokacija: mikrolokacija,
      ulica: ulica,
      kvadratura: kvadratura,
      cena: cena,
      oglasivac: oglasivac,
      godIzgradnje: godIzgradnje,
      stanje: stanje,
      tipGrejanja: tipGrejanja,
      sprat: sprat,
      ukupnaSpratnost: ukupnaSpratnost,
      parking: parking,
      opis: opis,
      karakteristike: karakteristike,
      slike: slike,
      linije: linije,
      brSoba: brSoba,
      mesecneRezije: mesecneRezije,
      tipOglasivaca: tipOglasivaca,
      prodato: prodato,
      izmenaDatum: izmenaDatum,
      izmenaVreme: izmenaVreme
    }

    return this.http.post(`${this.uri}/oglasivac/changeNekretnina`, data);
  }

  changeProdato(idN,prodato) {
    const data = {
      idN:idN,
      prodato:prodato
    }

    return this.http.post(`${this.uri}/oglasivac/changeProdato`, data);
  }

  changeKorisnik(korIme,telefon,email,agencija) {
    const data = {
      korIme:korIme,
      telefon:telefon,
      email:email,
      agencija:agencija
    }

    return this.http.post(`${this.uri}/oglasivac/changeKorisnik`, data);
  }

  getPoMikrolokaciji(mikrolokacija) {
    const data={
      mikrolokacija:mikrolokacija
    }

    return this.http.post(`${this.uri}/kupac/getPoMikrolokaciji`, data);
  }

  getPoTipuOglasivaca(tip) {
    const data={
      tip:tip
    }

    return this.http.post(`${this.uri}/oglasivac/getPoTipuOglasivaca`, data);
  }
}
