import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenTopvideosComponent } from './zen-topvideos.component';

describe('ZenTopvideosComponent', () => {
  let component: ZenTopvideosComponent;
  let fixture: ComponentFixture<ZenTopvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenTopvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenTopvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
