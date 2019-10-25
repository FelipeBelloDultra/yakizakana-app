import { TestBed } from '@angular/core/testing';

import { FoodDescriptionService } from './food-description.service';

describe('FoodDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodDescriptionService = TestBed.get(FoodDescriptionService);
    expect(service).toBeTruthy();
  });
});
