import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  headerState = "user";

  constructor(private router:Router) { 
    
  }
  
  ngOnInit() {
    
  }

  cikisYap(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  
  @Input()
  set headerOptions(data) {
    this.headerState = data;
  }

}
