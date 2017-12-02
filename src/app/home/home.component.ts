import { Component, OnInit } from '@angular/core';
import { AlertService, AuthenticationService } from '../_services/index';

import { Home } from '../_models/Home';
import { HomeService } from '../_services/home-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeResponseData: Home[];
  homeDataKeys: any=[];

  constructor(
    private homeService: HomeService,
    private authenticationservice: AuthenticationService
  ) { }

  ngOnInit() {
    this.getHomeData();
    console.log(JSON.stringify(this.homeResponseData));
  }

  getHomeData(): void {
    this.homeService.getHomeData()
    .subscribe(responseData => {
        // console.log(responseData);
        this.homeResponseData = responseData;
        console.log(this.homeResponseData);
        //this.transform();      
      }
    );
  }
  logout(): void{
    this.authenticationservice.logout();
  }
/*
  transform(): void{
    // this.homeDataKeys = Object.keys(this.homeResponseData);
    // console.log(this.homeDataKeys);
    for(let arr of this.homeResponseData){
      Object.keys(arr) && Object.keys(arr).map((key)=>{
         //console.log("push")
         this.homeDataKeys.push(key);
       });
   }
    }
    */
}
