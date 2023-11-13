import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Req, ReqWithDates } from '../model/tmdb.model';
import { MoviesService } from './movies.service';
import { StoreService } from './store.service';
import { TmdbRepoService } from './tmdb.repo.service';

describe('MoviesService', () => {
  let moviesService: MoviesService;
  let tmdbRepoService: jasmine.SpyObj<TmdbRepoService>;
  let storeService: jasmine.SpyObj<StoreService>;

  beforeEach(() => {
    const tmdbRepoSpy = jasmine.createSpyObj('TmdbRepoService', [
      'getNowPlaying',
      'getPopular',
      'getTopRating',
      'getUpcomming',
    ]);
    const storeSpy = jasmine.createSpyObj('StoreService', [
      'updateNowPlayingState',
      'updatePopularState',
      'updateTopRatingState',
      'updateUpcomingState',
    ]);

    TestBed.configureTestingModule({
      providers: [
        MoviesService,
        { provide: TmdbRepoService, useValue: tmdbRepoSpy },
        { provide: StoreService, useValue: storeSpy },
      ],
    });

    moviesService = TestBed.inject(MoviesService);
    tmdbRepoService = TestBed.inject(
      TmdbRepoService
    ) as jasmine.SpyObj<TmdbRepoService>;
    storeService = TestBed.inject(StoreService) as jasmine.SpyObj<StoreService>;
  });

  describe('Given the MoviesService', () => {
    it('Then should be created', () => {
      expect(moviesService).toBeTruthy();
    });

    describe('When fetching Now Playing movies', () => {
      it('Then should request with default page 1 and update the store', () => {
        const mockData = {} as ReqWithDates;
        tmdbRepoService.getNowPlaying.and.returnValue(of(mockData));

        moviesService.fetchNowPlaying();

        expect(tmdbRepoService.getNowPlaying).toHaveBeenCalledWith('1');
        expect(storeService.updateNowPlayingState).toHaveBeenCalledWith(
          mockData
        );
      });

      it('Then should request with custom page and update the store', () => {
        const mockData = {} as ReqWithDates;
        tmdbRepoService.getNowPlaying.and.returnValue(of(mockData));

        moviesService.fetchNowPlaying('2');

        expect(tmdbRepoService.getNowPlaying).toHaveBeenCalledWith('2');
        expect(storeService.updateNowPlayingState).toHaveBeenCalledWith(
          mockData
        );
      });
    });

    describe('When fetching Popular movies', () => {
      it('Then should request with default page 1 and update the store', () => {
        const mockData = {} as unknown as Req;
        tmdbRepoService.getPopular.and.returnValue(of(mockData));

        moviesService.fetchPopular();

        expect(tmdbRepoService.getPopular).toHaveBeenCalledWith('1');
        expect(storeService.updatePopularState).toHaveBeenCalledWith(mockData);
      });

      it('Then should request with custom page and update the store', () => {
        const mockData = {} as unknown as Req;
        tmdbRepoService.getPopular.and.returnValue(of(mockData));

        moviesService.fetchPopular('2');

        expect(tmdbRepoService.getPopular).toHaveBeenCalledWith('2');
        expect(storeService.updatePopularState).toHaveBeenCalledWith(mockData);
      });
    });

    describe('When fetching Top Rating movies', () => {
      it('Then should request with default page 1 and update the store', () => {
        const mockData = {} as unknown as Req;
        tmdbRepoService.getTopRating.and.returnValue(of(mockData));

        moviesService.fetchTopRating();

        expect(tmdbRepoService.getTopRating).toHaveBeenCalledWith('1');
        expect(storeService.updateTopRatingState).toHaveBeenCalledWith(
          mockData
        );
      });

      it('Then should request with custom page and update the store', () => {
        const mockData = {} as unknown as Req;
        tmdbRepoService.getTopRating.and.returnValue(of(mockData));

        moviesService.fetchTopRating('2');

        expect(tmdbRepoService.getTopRating).toHaveBeenCalledWith('2');
        expect(storeService.updateTopRatingState).toHaveBeenCalledWith(
          mockData
        );
      });
    });

    describe('When fetching Upcoming movies', () => {
      it('Then should request with default page 1 and update the store', () => {
        const mockData = {} as ReqWithDates;
        tmdbRepoService.getUpcomming.and.returnValue(of(mockData));

        moviesService.fetchUpcoming();

        expect(tmdbRepoService.getUpcomming).toHaveBeenCalledWith('1');
        expect(storeService.updateUpcomingState).toHaveBeenCalledWith(mockData);
      });

      it('Then should request with custom page and update the store', () => {
        const mockData = {} as ReqWithDates;
        tmdbRepoService.getUpcomming.and.returnValue(of(mockData));

        moviesService.fetchUpcoming('2');

        expect(tmdbRepoService.getUpcomming).toHaveBeenCalledWith('2');
        expect(storeService.updateUpcomingState).toHaveBeenCalledWith(mockData);
      });
    });
  });
});
