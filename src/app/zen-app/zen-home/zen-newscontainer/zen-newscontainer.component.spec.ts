import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenNewscontainerComponent } from './zen-newscontainer.component';

describe('ZenNewscontainerComponent', () => {
  let component: ZenNewscontainerComponent;
  let fixture: ComponentFixture<ZenNewscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenNewscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenNewscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
