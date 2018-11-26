import { TestBed } from '@angular/core/testing';

import { HttpserviceService } from './httpservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: HttpserviceService = TestBed.get(HttpserviceService);
    expect(service).toBeTruthy();
  });
});
