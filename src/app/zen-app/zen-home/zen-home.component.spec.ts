import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenHomeComponent } from './zen-home.component';

describe('ZenHomeComponent', () => {
  let component: ZenHomeComponent;
  let fixture: ComponentFixture<ZenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
