import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from '@angular/router';
import { Funcs } from 'src/app/needs/funcs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[Funcs]
})
export class LoginComponent implements OnInit {


  kadi = "";
  sifre = "";

  constructor(private titleService: Title, private httpService:HttpService,private router:Router,private funcs:Funcs) { }

  ngOnInit() {    
    this.titleService.setTitle("Login");
     
    if(this.funcs.localStorageGetItem("kadi") != null && this.funcs.localStorageGetItem("pw") != null)
    {
      this.router.navigate(['/admin/home']);
    }
  }

  loginmsg = "";
  girisYap(){
      let frmData:FormData = new FormData(); 
      frmData.append('kadi', this.kadi);
      frmData.append('pw', this.sifre);

      this.httpService.post("login", frmData).subscribe(
            data => {
              //console.log(data);
              if(data.sonuc == "no")
              {
                this.loginmsg = "Dikkat: "+ data.hata;
                
                setInterval(() => { // 5 saniye sonra mesajı sil.
                  this.loginmsg = "";                
                },5000)
              }
              else
              {
                this.funcs.localStorageSetItem("id", data.mesaj[0].id);
                this.funcs.localStorageSetItem("isim", data.mesaj[0].isim);
                this.funcs.localStorageSetItem("kadi", data.mesaj[0].kadi);
                this.funcs.localStorageSetItem("pw", data.mesaj[0].pw);
                this.router.navigate(['/admin/home']);
              }
            },
            error => {
              console.error("Hata oluştu:login");              
            }
      );
  }

}


