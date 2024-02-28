import { TestBed } from '@angular/core/testing';
import { TheMovieDBService } from './tmdb.service';

describe('Given the DictionaryService class', () => {
  let service: TheMovieDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMovieDBService);
  });

  describe('When the service is instantiated', () => {
    it('Then should be created', () => {
      expect(service).toBeTruthy();
    });

    it('Then should return keys with first letter in uppercase and replace "_" with spaces', () => {
      service.movies = {
        POPULAR: 'movie/popular?language=en-US&page=1',
        TOP_RATING: 'movie/top_rated?language=en-US&page=1',
        UPCOMING: 'movie/upcoming?language=en-US&page=1',
      };

      const transformedKeys = service.getKeys(service.movies);

      expect(transformedKeys).toEqual(['Popular', 'Top rating', 'Upcoming']);
    });
  });
});
