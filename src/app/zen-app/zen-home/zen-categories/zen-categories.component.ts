import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zen-categories',
  templateUrl: './zen-categories.component.html',
  styleUrls: ['./zen-categories.component.css']
})
export class ZenCategoriesComponent implements OnInit {

  @Input() allCategories: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
