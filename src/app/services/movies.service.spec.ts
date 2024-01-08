import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Movie, ReqWithDates } from '../model/tmdb.model';
import { MoviesService } from './movies.service';
import { StoreService } from './store.service';
import { TmdbRepoService } from './tmdb.repo.service';

describe('Given an instance of MoviesService', () => {
  let moviesService: MoviesService;
  let tmdbRepoServiceSpy: jasmine.SpyObj<TmdbRepoService>;
  let storeServiceSpy: jasmine.SpyObj<StoreService>;

  beforeEach(() => {
    tmdbRepoServiceSpy = jasmine.createSpyObj('TmdbRepoService', [
      'getMoviesList',
    ]);
    storeServiceSpy = jasmine.createSpyObj('StoreService', ['setMovieList']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MoviesService,
        { provide: TmdbRepoService, useValue: tmdbRepoServiceSpy },
        { provide: StoreService, useValue: storeServiceSpy },
      ],
    });

    moviesService = TestBed.inject(MoviesService);
  });

  describe('When fetching movies', () => {
    it('Then should be created', () => {
      expect(moviesService).toBeTruthy();
    });

    it('Then should fetch movies and set them in the store', fakeAsync(() => {
      const mockMovies: ReqWithDates[] = [
        {
          dates: { maximum: '2', minimum: '1' },
          page: 1,
          results: [{} as Movie],
          total_pages: 1,
          total_results: 1,
        },
        {
          dates: { maximum: '2', minimum: '1' },
          page: 1,
          results: [{} as Movie],
          total_pages: 1,
          total_results: 1,
        },
      ];
      tmdbRepoServiceSpy.getMoviesList.and.returnValue(of(mockMovies[0]));

      let result: void | null = null;

      moviesService.fetchMoviesList('path').subscribe((data) => {
        result = data;
      });

      tick();

      expect(result).toBeUndefined();

      expect(storeServiceSpy.setMovieList).toHaveBeenCalledWith(mockMovies[0]);
    }));

    it('Then should handle errors and log them', fakeAsync(() => {
      spyOn(console, 'error');
      const mockError = new Error('Test error');
      tmdbRepoServiceSpy.getMoviesList.and.returnValue(
        new Observable((observer) => observer.error(mockError))
      );

      let result: void | null = null;

      moviesService.fetchMoviesList('path').subscribe({
        next: () => {},
        error: (error) => {
          result = error;
        },
      });

      tick();

      expect(result).toBeNull();

      expect(console.error).toHaveBeenCalledWith(
        'Error fetching movies:',
        mockError
      );
    }));

    afterEach(() => {
      TestBed.resetTestingModule();
    });
  });
});
