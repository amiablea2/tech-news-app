import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../../_services/index';

@Component({
  selector: 'zen-login',
  templateUrl: './zen-login.component.html',
  styleUrls: ['./zen-login.component.css']
})
export class ZenLoginComponent implements OnInit {

  constructor(
    private authenticationservice: AuthenticationService
  ) { }

  ngOnInit() {
  }
  
  logout(): void{
    this.authenticationservice.logout();
  }

}
