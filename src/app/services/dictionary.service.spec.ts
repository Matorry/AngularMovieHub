import { TestBed } from '@angular/core/testing';
import { DictionaryService } from './dictionary.service';

describe('Given the DictionaryService class', () => {
  let service: DictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryService);
  });

  describe('When the service is instantiated', () => {
    it('Then should be created', () => {
      expect(service).toBeTruthy();
    });

    it('Then should return keys with first letter in uppercase and replace "_" with spaces', () => {
      service.dictionary = {
        POPULAR: 'movie/popular?language=en-US&page=1',
        TOP_RATING: 'movie/top_rated?language=en-US&page=1',
        UPCOMING: 'movie/upcoming?language=en-US&page=1',
      };

      const transformedKeys = service.getKeys();

      expect(transformedKeys).toEqual(['Popular', 'Top rating', 'Upcoming']);
    });
  });
});
