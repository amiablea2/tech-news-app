import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zen-news',
  templateUrl: './zen-news.component.html',
  styleUrls: ['./zen-news.component.css']
})
export class ZenNewsComponent implements OnInit {

  @Input() headline: string;

  constructor() { }

  ngOnInit() {
  }

}
