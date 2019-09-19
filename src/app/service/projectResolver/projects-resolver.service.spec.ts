import { TestBed } from '@angular/core/testing';

import { ProjectsResolverService } from '../projectResolver/projects-resolver.service';

describe('ProjectsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsResolverService = TestBed.get(ProjectsResolverService);
    expect(service).toBeTruthy();
  });
});
