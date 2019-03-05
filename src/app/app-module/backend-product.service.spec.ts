import { TestBed } from '@angular/core/testing';

import { BackendProductService } from './backend-product.service';

describe('BackendProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendProductService = TestBed.get(BackendProductService);
    expect(service).toBeTruthy();
  });
});
