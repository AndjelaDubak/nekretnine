import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { BrisanjeMikrolokacijeComponent } from './brisanje-mikrolokacije/brisanje-mikrolokacije.component';
import { DodavanjeAgencijeComponent } from './dodavanje-agencije/dodavanje-agencije.component';
import { DodavanjeKorisnikaComponent } from './dodavanje-korisnika/dodavanje-korisnika.component';
import { DodavanjeMikrolokacijeComponent } from './dodavanje-mikrolokacije/dodavanje-mikrolokacije.component';
import { DodavanjeNekretnineComponent } from './dodavanje-nekretnine/dodavanje-nekretnine.component';
import { IzmenaKorisnikaComponent } from './izmena-korisnika/izmena-korisnika.component';
import { IzmenaNekretnineComponent } from './izmena-nekretnine/izmena-nekretnine.component';
import { KupacComponent } from './kupac/kupac.component';
import { MojNalogOComponent } from './moj-nalog-o/moj-nalog-o.component';
import { MojNalogComponent } from './moj-nalog/moj-nalog.component';
import { NaprednaPretragaComponent } from './napredna-pretraga/napredna-pretraga.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { OglasivacComponent } from './oglasivac/oglasivac.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RegistracijaComponent } from './registracija/registracija.component';

const routes: Routes = [
  {path:'', component:PocetnaComponent},
  {path:'prijava', component:PrijavaComponent},
  {path:'kupac', component:KupacComponent},
  {path:'administrator', component:AdministratorComponent},
  {path:'registracija', component:RegistracijaComponent},
  {path:'promenaLozinke', component:PromenaLozinkeComponent},
  {path:'pretraga', component:PretragaComponent},
  {path:'nekretnina', component:NekretninaComponent},
  {path:'mojNalog', component:MojNalogComponent},
  {path:'naprednaPretraga', component:NaprednaPretragaComponent},
  {path:'oglasivac', component:OglasivacComponent},
  {path:'dodavanjeNekretnine', component:DodavanjeNekretnineComponent},
  {path:'izmenaNekretnine', component:IzmenaNekretnineComponent},
  {path:'mojNalogO', component:MojNalogOComponent},
  {path:'dodavanjeKorisnika', component:DodavanjeKorisnikaComponent},
  {path:'izmenaKorisnika', component:IzmenaKorisnikaComponent},
  {path:'dodavanjeAgencije', component:DodavanjeAgencijeComponent},
  {path:'dodavanjeMikrolokacije', component:DodavanjeMikrolokacijeComponent},
  {path:'brisanjeMikrolokacije', component:BrisanjeMikrolokacijeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
