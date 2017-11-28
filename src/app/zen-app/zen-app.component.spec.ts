import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenAppComponent } from './zen-app.component';

describe('ZenAppComponent', () => {
  let component: ZenAppComponent;
  let fixture: ComponentFixture<ZenAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
