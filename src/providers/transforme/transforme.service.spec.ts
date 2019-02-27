import { TestBed, inject } from '@angular/core/testing';

import { TransformeService } from './transforme.service';

describe('TransformeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformeService]
    });
  });

  it('should be created', inject([TransformeService], (service: TransformeService) => {
    expect(service).toBeTruthy();
  }));
});
