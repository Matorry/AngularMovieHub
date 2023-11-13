import { Req, ReqWithDates } from '../model/tmdb.model';
import { StoreService } from './store.service';

describe('Given the StoreService class', () => {
  let storeService: StoreService;

  beforeEach(() => {
    storeService = new StoreService();
  });

  it('Then it should be created', () => {
    expect(storeService).toBeTruthy();
  });

  describe('When retrieving State', () => {
    it('Then should get Now Playing state', () => {
      const nowPlayingState = storeService.getNowPlayingState();
      expect(nowPlayingState).toBeTruthy();
    });

    it('Then should get Popular state', () => {
      const popularState = storeService.getPopularState();
      expect(popularState).toBeTruthy();
    });

    it('Then should get Top Rating state', () => {
      const topRatingState = storeService.getTopRatingState();
      expect(topRatingState).toBeTruthy();
    });

    it('Then should get Upcoming state', () => {
      const upcomingState = storeService.getUpcomingState();
      expect(upcomingState).toBeTruthy();
    });
  });

  describe('When updating State', () => {
    it('Then should update Now Playing state', () => {
      const mockData = {} as unknown as ReqWithDates;
      storeService.updateNowPlayingState(mockData);

      const nowPlayingState = storeService.getNowPlayingState().getValue();
      expect(nowPlayingState).toEqual(mockData);
    });

    it('Then should update Popular state', () => {
      const mockData = {} as unknown as Req;
      storeService.updatePopularState(mockData);

      const popularState = storeService.getPopularState().getValue();
      expect(popularState).toEqual(mockData);
    });

    it('Then should update Top Rating state', () => {
      const mockData = {} as unknown as Req;
      storeService.updateTopRatingState(mockData);

      const topRatingState = storeService.getTopRatingState().getValue();
      expect(topRatingState).toEqual(mockData);
    });

    it('Then should update Upcoming state', () => {
      const mockData = {} as unknown as ReqWithDates;
      storeService.updateUpcomingState(mockData);

      const upcomingState = storeService.getUpcomingState().getValue();
      expect(upcomingState).toEqual(mockData);
    });
  });
});
