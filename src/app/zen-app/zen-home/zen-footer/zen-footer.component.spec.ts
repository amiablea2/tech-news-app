import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenFooterComponent } from './zen-footer.component';

describe('ZenFooterComponent', () => {
  let component: ZenFooterComponent;
  let fixture: ComponentFixture<ZenFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
