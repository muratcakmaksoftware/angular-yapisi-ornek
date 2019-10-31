import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http/http.service';
import { Funcs } from 'src/app/needs/funcs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  providers:[Funcs]
})
export class AdminHomeComponent implements OnInit {

  constructor(private titleService: Title,private httpService:HttpService, private funcs:Funcs, private router:Router) { 
    titleService.setTitle("Home Admin");
  }

  ngOnInit() {
  }

  
}
