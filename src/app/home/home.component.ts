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
        console.log(responseData);
        this.homeResponseData = responseData;
      }
    );
  }
  logout(): void{
    this.authenticationservice.logout();
  }
}
