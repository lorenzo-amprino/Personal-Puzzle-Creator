import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPuzzleComponent } from './modifica-puzzle.component';

describe('ModificaPuzzleComponent', () => {
  let component: ModificaPuzzleComponent;
  let fixture: ComponentFixture<ModificaPuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
