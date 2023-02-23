import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KupacService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  pretraga(tip,grad,opstina,mikrolokacija,cena,kvadratura,brSoba) {
    const data={
      tip:tip,
      grad:grad,
      opstina:opstina,
      mikrolokacija:mikrolokacija,
      cena:cena,
      kvadratura:kvadratura,
      brSoba:brSoba
    }

    return this.http.post(`${this.uri}/kupac/pretraga`, data);
  }

  getPoMikrolokaciji(mikrolokacija) {
    const data={
      mikrolokacija:mikrolokacija
    }

    return this.http.post(`${this.uri}/kupac/getPoMikrolokaciji`, data);
  }

  getPoTipuIMikrolokaciji(tip,mikrolokacija) {
    const data={
      tip:tip,
      mikrolokacija:mikrolokacija
    }

    return this.http.post(`${this.uri}/kupac/getPoTipuIMikrolokaciji`, data);
  }

  getAgencijuPoNazivu(naziv) {
    const data={
      naziv:naziv
    }

    return this.http.post(`${this.uri}/kupac/getAgencijuPoNazivu`, data);
  }

  naprednaPretraga(cenaOd,cenaDo,kvadraturaOd,kvadraturaDo,brSobaOd,brSobaDo,godIzgradnjeOd,godIzgradnjeDo,spratOd,spratDo,mesecneRezijeOd,mesecneRezijeDo,oglasivac,stanje,grejanje,karakteristike) {
    const data = {
      cenaOd: cenaOd,
      cenaDo: cenaDo,
      kvadraturaOd: kvadraturaOd,
      kvadraturaDo: kvadraturaDo,
      brSobaOd: brSobaOd,
      brSobaDo: brSobaDo,
      godIzgradnjeOd: godIzgradnjeOd,
      godIzgradnjeDo: godIzgradnjeDo,
      spratOd: spratOd,
      spratDo: spratDo,
      mesecneRezijeOd: mesecneRezijeOd,
      mesecneRezijeDo: mesecneRezijeDo,
      oglasivac: oglasivac,
      stanje: stanje,
      grejanje: grejanje,
      karakteristike: karakteristike
    }

    return this.http.post(`${this.uri}/kupac/naprednaPretraga`, data);

  }

}
