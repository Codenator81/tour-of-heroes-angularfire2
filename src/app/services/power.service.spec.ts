/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PowerService } from './power.service';

describe('PowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerService]
    });
  });

  it('should ...', inject([PowerService], (service: PowerService) => {
    expect(service).toBeTruthy();
  }));
});
