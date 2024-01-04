import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ReqWithDates } from '../model/tmdb.model';
import { MoviesService } from './movies.service';
import { StoreService } from './store.service';
import { TmdbRepoService } from './tmdb.repo.service';

describe('Given the class MoviesService', () => {
  let moviesService: MoviesService;
  let tmdbRepoService: jasmine.SpyObj<TmdbRepoService>;
  let storeService: jasmine.SpyObj<StoreService>;

  beforeEach(() => {
    const tmdbRepoSpy = jasmine.createSpyObj('TmdbRepoService', [
      'getMoviesList',
    ]);
    const storeSpy = jasmine.createSpyObj('StoreService', [
      'setMovieList',
      'getMovieList',
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

  describe('When fetching Movie list', () => {
    it('Then should request with default page 1 and update the store', () => {
      const mockData = {} as ReqWithDates;

      tmdbRepoService.getMoviesList.and.returnValue(of(mockData));

      moviesService.fetchMoviesList('');

      expect(tmdbRepoService.getMoviesList).toHaveBeenCalledWith('');
      expect(storeService.setMovieList).toHaveBeenCalledWith(mockData);
    });
  });
});
