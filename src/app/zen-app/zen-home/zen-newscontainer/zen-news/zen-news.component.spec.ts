import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenNewsComponent } from './zen-news.component';

describe('ZenNewsComponent', () => {
  let component: ZenNewsComponent;
  let fixture: ComponentFixture<ZenNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
