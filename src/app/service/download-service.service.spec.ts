import { TestBed } from '@angular/core/testing';

import { DownloadServiceService } from './download-service.service';

describe('DownloadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadServiceService = TestBed.get(DownloadServiceService);
    expect(service).toBeTruthy();
  });
});
