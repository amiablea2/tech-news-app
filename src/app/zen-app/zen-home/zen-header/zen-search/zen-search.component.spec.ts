import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenSearchComponent } from './zen-search.component';

describe('ZenSearchComponent', () => {
  let component: ZenSearchComponent;
  let fixture: ComponentFixture<ZenSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
