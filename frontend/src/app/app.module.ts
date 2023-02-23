import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KupacComponent } from './kupac/kupac.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministratorComponent } from './administrator/administrator.component';
import { RegistracijaComponent } from './registracija/registracija.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PrijavaComponent } from './prijava/prijava.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { FooterComponent } from './footer/footer.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MojNalogComponent } from './moj-nalog/moj-nalog.component';
import { NaprednaPretragaComponent } from './napredna-pretraga/napredna-pretraga.component';
import { OglasivacComponent } from './oglasivac/oglasivac.component';
import { DodavanjeNekretnineComponent } from './dodavanje-nekretnine/dodavanje-nekretnine.component';
import { IzmenaNekretnineComponent } from './izmena-nekretnine/izmena-nekretnine.component';
import { MojNalogOComponent } from './moj-nalog-o/moj-nalog-o.component';
import { DodavanjeKorisnikaComponent } from './dodavanje-korisnika/dodavanje-korisnika.component';
import { IzmenaKorisnikaComponent } from './izmena-korisnika/izmena-korisnika.component';
import { DodavanjeAgencijeComponent } from './dodavanje-agencije/dodavanje-agencije.component';
import { DodavanjeMikrolokacijeComponent } from './dodavanje-mikrolokacije/dodavanje-mikrolokacije.component';
import { BrisanjeMikrolokacijeComponent } from './brisanje-mikrolokacije/brisanje-mikrolokacije.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    KupacComponent,
    AdministratorComponent,
    RegistracijaComponent,
    PrijavaComponent,
    PromenaLozinkeComponent,
    FooterComponent,
    PretragaComponent,
    NekretninaComponent,
    NavbarComponent,
    MojNalogComponent,
    NaprednaPretragaComponent,
    OglasivacComponent,
    DodavanjeNekretnineComponent,
    IzmenaNekretnineComponent,
    MojNalogOComponent,
    DodavanjeKorisnikaComponent,
    IzmenaKorisnikaComponent,
    DodavanjeAgencijeComponent,
    DodavanjeMikrolokacijeComponent,
    BrisanjeMikrolokacijeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RecaptchaModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
