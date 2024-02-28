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
      let nowPlayingState: { name: string; path: string }[] = [];
      stateService.setGenres([{ name: 'Soy el path', path: 'soy/el/path' }]);
      stateService.getGenres().subscribe({
        next: (data) => (nowPlayingState = data),
      });
      expect(nowPlayingState).toEqual([
        { name: 'Soy el path', path: 'soy/el/path' },
      ]);
    });

    it('Then should setMovieList state', () => {
      const mockData = {} as unknown as ReqWithDates;
      let popularState: ReqWithDates[] = [];
      stateService.setMovieList(mockData);

      stateService.getMovieList().subscribe({
        next: (data) => (popularState = data),
      });
      expect(popularState).toEqual([mockData]);
    });
  });
});
