import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zen-newscontainer',
  templateUrl: './zen-newscontainer.component.html',
  styleUrls: ['./zen-newscontainer.component.css']
})
export class ZenNewscontainerComponent implements OnInit {

  @Input() myId: number;
  @Input() allNews: any[];

  constructor() { }

  ngOnInit() {
  }

}
