import { Component, OnInit } from '@angular/core';

import { Home } from '../_data/Home';
import { HomeService } from '../_services/home-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeResponseData: Home[];

  constructor(private homeService: HomeService) { }

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
}
