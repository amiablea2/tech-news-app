import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zen-home',
  templateUrl: './zen-home.component.html',
  styleUrls: ['./zen-home.component.css']
})
export class ZenHomeComponent implements OnInit {

  @Input() homeData: any[];
  constructor() { }

  ngOnInit() {
  }

}
