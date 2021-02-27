import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRivistaComponent } from './create-rivista.component';

describe('CreateRivistaComponent', () => {
  let component: CreateRivistaComponent;
  let fixture: ComponentFixture<CreateRivistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRivistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRivistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
