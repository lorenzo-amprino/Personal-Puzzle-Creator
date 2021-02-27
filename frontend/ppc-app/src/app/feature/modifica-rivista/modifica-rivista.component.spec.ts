import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaRivistaComponent } from './modifica-rivista.component';

describe('ModificaRivistaComponent', () => {
  let component: ModificaRivistaComponent;
  let fixture: ComponentFixture<ModificaRivistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaRivistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaRivistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
