import { ReqWithDates } from '../model/tmdb.model';
import { StateService } from './state.service';

describe('Given the StateService class', () => {
  let stateService: StateService;

  beforeEach(() => {
    stateService = new StateService();
  });

  describe('When retrieving State', () => {
    it('Then should getGenres state', () => {
      const nowPlayingState = stateService.getGenres();
      expect(nowPlayingState).toBeTruthy();
    });

    it('Then should getMovieList state', () => {
      const popularState = stateService.getMovieList();
      expect(popularState).toBeTruthy();
    });
  });

  describe('When updating State', () => {
    it('Then should setGenres state', () => {
      const mockData = {} as unknown as ReqWithDates;
      stateService.setGenres([{ name: 'Soy el path', path: 'soy/el/path' }]);

      const nowPlayingState = stateService.getGenres().getValue();
      expect(nowPlayingState).toEqual([
        { name: 'Soy el path', path: 'soy/el/path' },
      ]);
    });

    it('Then should setMovieList state', () => {
      const mockData = {} as unknown as ReqWithDates;
      stateService.setMovieList(mockData);

      const popularState = stateService.getMovieList().getValue();
      expect(popularState).toEqual([mockData]);
    });
  });
});
