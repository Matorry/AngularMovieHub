import { TestBed } from '@angular/core/testing';

import { TmdbRepoService } from './tmdb.repo.service';

describe('TmdbRepoService', () => {
  let service: TmdbRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
