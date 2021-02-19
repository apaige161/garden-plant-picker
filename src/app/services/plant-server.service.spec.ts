import { TestBed } from '@angular/core/testing';

import { PlantServerService } from './plant-server.service';

describe('PlantServerService', () => {
  let service: PlantServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
