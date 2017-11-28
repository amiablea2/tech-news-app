import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenHeaderComponent } from './zen-header.component';

describe('ZenHeaderComponent', () => {
  let component: ZenHeaderComponent;
  let fixture: ComponentFixture<ZenHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
