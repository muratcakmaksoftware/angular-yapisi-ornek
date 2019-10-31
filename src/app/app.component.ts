import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpService } from './services/http/http.service';
import { Funcs } from './needs/funcs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[Funcs]
})
export class AppComponent {

  href = "";
  header = "user";
  footer = "user";
  constructor(private router : Router, private titleService: Title, private httpService:HttpService,private funcs:Funcs){
    
  }

  ngOnInit() {
    this.href = this.router.url;    
  }

  componentAdded(value){
    //console.log(value.constructor.name); // components name
    this.href = this.router.url;
    if(this.href.indexOf("admin/") != -1){
      this.header = "admin";
      this.footer = "admin";
      this.checkAdmin();
    }
    else if(this.href.indexOf("/login") != -1){
      this.header = "login";
      this.footer = "login";
    }
    else{
      this.header = "user";
      this.footer = "user";
    }
  }

  componentRemoved(value){
    this.href = this.router.url;
    if(this.href.indexOf("admin/") != -1){
      this.header = "admin";
      this.footer = "admin";
      this.checkAdmin();
    }
    else if(this.href.indexOf("/login") != -1){
      this.header = "login";
      this.footer = "login";
    }
    else{
      this.header = "user";
      this.footer = "user";
    }
  }

  checkAdmin(){
    if(this.funcs.localStorageGetItem("kadi") != null && this.funcs.localStorageGetItem("pw") != null)
    {
      let frmData:FormData = new FormData(); 
      frmData.append('kadi', this.funcs.localStorageGetItem("kadi"));
      frmData.append('pw', this.funcs.localStorageGetItem("pw"));
        this.httpService.post("login", frmData).subscribe(
            data => {
              //console.log(data);
              if(data.sonuc == "no")
              {
                localStorage.clear(); //admin bilgileri yanlış !
                this.router.navigate(['/login']);
              }
              else
              {
                //admin sayfasında değiştikçe admin bilgilerinin güncellenmesi ve kontrol edilmesi.
                this.funcs.localStorageSetItem("id", data.mesaj[0].id);
                this.funcs.localStorageSetItem("isim", data.mesaj[0].isim);
                this.funcs.localStorageSetItem("kadi", data.mesaj[0].kadi);
                this.funcs.localStorageSetItem("pw", data.mesaj[0].pw);
              }
            },
            error => {
              console.error("Hata oluştu:");              
            }
      );
    }
    else{
      localStorage.clear(); //admin bilgileri yok ve admin sayfasına erişmeye çalışıyor!
      this.router.navigate(['/login']);
    }
  }

}