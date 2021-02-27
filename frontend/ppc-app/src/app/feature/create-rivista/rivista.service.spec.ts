import { TestBed } from '@angular/core/testing';

import { RivistaService } from './rivista.service';

describe('CreateRivistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RivistaService = TestBed.get(RivistaService);
    expect(service).toBeTruthy();
  });
});
