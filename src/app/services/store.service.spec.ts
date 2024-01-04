import { Genre, ReqWithDates } from '../model/tmdb.model';
import { StoreService } from './store.service';

describe('Given the StoreService class', () => {
  let storeService: StoreService;

  beforeEach(() => {
    storeService = new StoreService();
  });

  describe('When retrieving State', () => {
    it('Then should getGenres state', () => {
      const nowPlayingState = storeService.getGenres();
      expect(nowPlayingState).toBeTruthy();
    });

    it('Then should getMovieList state', () => {
      const popularState = storeService.getMovieList();
      expect(popularState).toBeTruthy();
    });
  });

  describe('When updating State', () => {
    it('Then should setGenres state', () => {
      const mockData = {} as unknown as ReqWithDates;
      storeService.setGenres([{} as Genre]);

      const nowPlayingState = storeService.getGenres().getValue();
      expect(nowPlayingState).toEqual([{} as Genre]);
    });

    it('Then should setMovieList state', () => {
      const mockData = {} as unknown as ReqWithDates;
      storeService.setMovieList(mockData);

      const popularState = storeService.getMovieList().getValue();
      expect(popularState).toEqual([mockData]);
    });
  });
});
