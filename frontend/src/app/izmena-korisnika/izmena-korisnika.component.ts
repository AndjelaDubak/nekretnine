import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Agencija } from '../models/agencija';
import { Korisnik } from '../models/korisnik';
import { PrijavaService } from '../servers/prijava.service';

@Component({
  selector: 'app-izmena-korisnika',
  templateUrl: './izmena-korisnika.component.html',
  styleUrls: ['./izmena-korisnika.component.css']
})
export class IzmenaKorisnikaComponent implements OnInit {

  constructor(private prijavaServis: PrijavaService, private router: Router) { }

  @ViewChild('Image') imgType:ElementRef;

  ngOnInit(): void {
    this.kor = JSON.parse(sessionStorage.getItem('izmenaKorisnika'));
    this.prijavaServis.prijava(this.kor.korIme).subscribe((kor:Korisnik)=>{
      this.korisnik = kor;
      this.ime = this.korisnik.ime;
      this.prezime = this.korisnik.prezime;
      this.korIme = this.korisnik.korIme;
      this.lozinka = this.korisnik.lozinka;
      this.poruka = '';
      this.kupac = false;
      this.prodavac = false;
      this.agent = false;
      this.grad = this.korisnik.grad.toString();
      this.datumRodjenja = this.korisnik.datumRodjenja;
      this.telefon = this.korisnik.telefon;
      this.potvrdaLoz = this.korisnik.lozinka;
      this.email = this.korisnik.email;
      this.brojLicence = this.korisnik.brojLicence;
      this.width = 0;
      this.slika = this.korisnik.slika;
      this.height = 0;
      this.captcha = '';
      this.agencija = this.korisnik.agencija;
      this.tip = this.korisnik.tip;

      if(this.tip == 'kupac') {
        this.kupac = true;
      }

      if(this.tip == 'oglasivac' && this.agencija != '') {
        this.agent = true;
      }

      if(this.tip == 'oglasivac' && this.agencija == '') {
        this.prodavac = true;
      }
    })
    

    this.prijavaServis.getKorisnike().subscribe((korisnici: Korisnik[])=> {
      this.korisnici = korisnici;
    });
    this.prijavaServis.getAgencije().subscribe((agencije: Agencija[])=>{
      this.agencije = agencije;
    })
  }

  kor: Korisnik;
  ime: string;
  prezime: string;
  korIme: string;
  grad: string;
  datumRodjenja: string;
  telefon: string;
  lozinka: string;
  potvrdaLoz: string;
  email: string;
  poruka: string;
  kupac:boolean;
  agent: boolean;
  prodavac: boolean;
  agencije: Agencija[];
  brojLicence: string;
  width:number;
  height:number;
  korisnici: Korisnik[];
  captcha: string;
  agencija: string;
  tip:string;
  korisnik: Korisnik;
  slika:string;

  ngAfterViewInit() {
   // console.log(this.imgType.nativeElement.offsetWidth);
  //console.log(this.imgType.nativeElement.offsetHeight);
  }

  fileChangeEvent(fileInput: any) {
    const Img = new Image();

    const filesToUpload = (fileInput.target.files);
    Img.src = URL.createObjectURL(filesToUpload[0]);

    Img.onload = (e: any) => {
      this.height = e.path[0].height;
      this.width = e.path[0].width;
    }
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    //alert(this.captcha);
  }

  onChangeKupac(event) {
    if(event.target.checked) {
      this.kupac= true;
      this.agencija = '';
      this.agent = false;
      this.brojLicence = '';      
      //console.log(this.kupac);
    }
  }

  onChangeAgent(event) {
    if(event.target.checked) {
      this.agent = true; 
      this.kupac = false;
      this.prodavac = false;    
    }
  }

  onChangeProdavac(event) {
    if(event.target.checked) {
      this.prodavac = true;
      this.agencija = '';
      this.agent = false;
      this.brojLicence = '';      
    }
  }

  prijava(Image) {
    let format;
    if(Image.value!='') {
      format = Image.value.split(".");
      this.slika = Image.value.split("\\")[2];
    }
    format = this.slika.split('.');
    let slika = Image.value.split("\\");
    //alert(slika[2]);
    //alert(this.agencija);
    //alert(this.width);
    if(this.ime == '' || this.prezime == '' || this.korIme == '' || this.grad == '' || this.datumRodjenja == '' || this.telefon == '' || this.lozinka == '' || this.potvrdaLoz == '' || this.email == '') {
      this.poruka = 'Popunite sva polja!';
      return false;
    }
    for(let i=0;i<this.korisnici.length;i++) {
      if(this.korisnici[i].korIme == this.korIme && this.korisnici[i].korIme != this.kor.korIme) {
        this.poruka = 'Korisničko ime zazueto!';
        return false;
      }
    }
    if(this.ime.length<3) {
      this.poruka = 'Ime mora sadržati bar 3 slova!';
      return false;
    }
    if(this.prezime.length<3) {
      this.poruka = 'Prezime mora sadržati bar 3 slova!';
      return false;
    }
    if(/^\d\d\d\d-\d\d-\d\d$/.test(this.datumRodjenja) == false) {
      this.poruka = 'Unesite datum u formatu: gggg-mm-dd';
      return false;
    }
    let godina = parseInt(this.datumRodjenja.split('-')[0]);
    let mesec = parseInt(this.datumRodjenja.split('-')[1]);
    let dan = parseInt(this.datumRodjenja.split('-')[2]);
    if(godina > 2022) {
      this.poruka = 'Unesite validnu godinu!';
      return false;
    }
    if(mesec==0 || mesec>12) {
      this.poruka = 'Unesite validan mesec za godinu!';
      return false;
    }
    if(dan==0 || dan>31) {
      this.poruka = 'Unesite validan dan za godinu!';
      return false;
    }
    if(/^\d\d\d-\d\d\d-\d{3,4}$/.test(this.telefon) == false) {
      this.poruka = 'Unesite telefon u formatu: xxx-xxx-xxx(x)';
      return false;
    }
    if(this.lozinka.length < 8) {
      this.poruka = 'Lozinka mora sadržati bar 8 karaktera!';
      return false;
    }
    if(/[a-z]/.test(this.lozinka) == false) {
      this.poruka = 'Lozinka mora počinjati slovom!';
      return false;
    }
    if(/[A-Z]/.test(this.lozinka) == false) {
      this.poruka = 'Lozinka mora sadržati bar 1 veliko slovo!';
      return false;
    }
    if(/[\d{+}]/.test(this.lozinka) == false) {
      this.poruka = 'Lozinka mora sadržati bar 1 broj!';
      return false;
    }
    if(/[^a-zA-Z\d]/.test(this.lozinka) == false ) {
      this.poruka = 'Lozinka mora sadržati bar 1 specijalan karakter!'
      return false;
    }
    if(this.lozinka != this.potvrdaLoz) {
      this.poruka = 'Pogrešna potvrda lozinke!';
      return false;
    }
    for(let i=0;i<this.korisnici.length;i++) {
      if(this.korisnici[i].email == this.email && this.korisnici[i].korIme != this.kor.korIme) {
        this.poruka = 'Već postoji nalog za zadatu e-mail adresu!';
        return false;
      }
    }
    if(/\w@\w/.test(this.email) == false) {
      this.poruka = 'Unesite validan mejl sa @!';
      return false;
    }
    if(format[1] != 'png' && format[1] != 'jpg') {
      this.poruka = 'Dozvoljen format slike je jpg ili png!';
      return false;
    }
    if(Image.value!='') {
      if(this.width > 300 || this.height > 300 || this.width < 100 || this.height < 100) {
        this.poruka = 'Dimenzije slike moraju biti veće od 100x100 i manje od 300x300!';
        return false;
      }
    }
    if (this.agent==true) {
      if(this.agencija == '') {
        this.poruka = 'Unesite agenciju u kojoj ste zaposleni!';
        return false;
      }
      if(this.brojLicence == '') {
        this.poruka = 'Unesite broj licence!';
        return false;
      }
      this.tip = 'oglasivac';
    }
    else if(this.kupac==true) {
      this.tip = 'kupac';
    }
    else if(this.prodavac==true) {
      this.tip = 'oglasivac';
    }
    this.prijavaServis.changeKorisnikAdm(this.ime,this.prezime,this.kor.korIme,this.lozinka,this.grad,this.datumRodjenja,this.telefon,this.email,this.agencija,this.brojLicence, this.tip, this.slika,"da").subscribe((korisnici: Korisnik[])=> {
      this.router.navigate(['/administrator']);
    });
    return true;
}

}
