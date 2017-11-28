import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenUserComponent } from './zen-user.component';

describe('ZenUserComponent', () => {
  let component: ZenUserComponent;
  let fixture: ComponentFixture<ZenUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
