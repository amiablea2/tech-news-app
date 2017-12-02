import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zen-app',
  templateUrl: './zen-app.component.html',
  styleUrls: ['./zen-app.component.css']
})
export class ZenAppComponent implements OnInit {

  @Input() homeResponse: any[];  
  constructor() { }

  ngOnInit() {
  }

}
