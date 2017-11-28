import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenCategoriesComponent } from './zen-categories.component';

describe('ZenCategoriesComponent', () => {
  let component: ZenCategoriesComponent;
  let fixture: ComponentFixture<ZenCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
