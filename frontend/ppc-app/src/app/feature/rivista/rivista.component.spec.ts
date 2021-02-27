import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivistaComponent } from './rivista.component';

describe('RivistaComponent', () => {
  let component: RivistaComponent;
  let fixture: ComponentFixture<RivistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
