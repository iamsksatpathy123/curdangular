import { TestBed } from '@angular/core/testing';

import { MovieBookingService } from './movie-booking.service';

describe('MovieBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieBookingService = TestBed.get(MovieBookingService);
    expect(service).toBeTruthy();
  });
});
