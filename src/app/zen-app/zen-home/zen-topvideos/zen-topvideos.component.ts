import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zen-topvideos',
  templateUrl: './zen-topvideos.component.html',
  styleUrls: ['./zen-topvideos.component.css']
})
export class ZenTopvideosComponent implements OnInit {

  @Input() allVideos: any[];
  constructor() { }

  ngOnInit() {
  }

}
