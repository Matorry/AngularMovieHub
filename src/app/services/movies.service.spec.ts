import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Movie, ReqWithDates } from '../model/tmdb.model';
import { MoviesService } from './movies.service';
import { StateService } from './state.service';
import { TmdbRepoService } from './tmdb.repo.service';
import { TheMovieDBService } from './tmdb.service';

describe('Given an instance of MoviesService', () => {
  let moviesService: MoviesService;
  let tmdbRepoServiceSpy: jasmine.SpyObj<TmdbRepoService>;
  let stateServiceSpy: jasmine.SpyObj<StateService>;

  beforeEach(() => {
    tmdbRepoServiceSpy = jasmine.createSpyObj('TmdbRepoService', [
      'getMoviesList',
      'getGenres',
    ]);
    stateServiceSpy = jasmine.createSpyObj('StateService', [
      'setMovieList',
      'setGenres',
      'getIsMoviesSelect',
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MoviesService,
        { provide: TmdbRepoService, useValue: tmdbRepoServiceSpy },
        { provide: StateService, useValue: stateServiceSpy },
        TheMovieDBService,
      ],
    });
  });

  describe('When fetching movies', () => {
    beforeEach(() => {
      stateServiceSpy.getIsMoviesSelect.and.returnValue(of(true));
      moviesService = TestBed.inject(MoviesService);
    });

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

      expect(stateServiceSpy.setMovieList).toHaveBeenCalledWith(mockMovies[0]);
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

    it('Then should fetch genres and set them in the store', fakeAsync(() => {
      const mockGenres = {
        genres: [
          { name: 'Accion', id: 1 },
          { name: 'Humor', id: 2 },
        ],
      };

      tmdbRepoServiceSpy.getGenres.and.returnValue(of(mockGenres));

      moviesService.fetchGenders();

      tick();

      expect(tmdbRepoServiceSpy.getGenres).toHaveBeenCalledTimes(1);
    }));

    it('Then should fetch genresMovies and set them in the store', fakeAsync(() => {
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
      moviesService.genres = [
        { name: 'Accion', path: '1' },
        { name: 'Humor', path: '2' },
      ];
      tmdbRepoServiceSpy.getMoviesList.and.returnValue(of(mockMovies[0]));
      const result = moviesService.fetchGenderMovies(0);

      tick();

      expect(result).toEqual(['Accion', 'Humor']);
    }));

    afterEach(() => {
      TestBed.resetTestingModule();
    });
  });
  describe('When fetching series', () => {
    beforeEach(() => {
      stateServiceSpy.getIsMoviesSelect.and.returnValue(of(false));
      moviesService = TestBed.inject(MoviesService);
    });

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

      expect(stateServiceSpy.setMovieList).toHaveBeenCalledWith(mockMovies[0]);
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

    it('Then should fetch genres and set them in the store', fakeAsync(() => {
      const mockGenres = {
        genres: [
          { name: 'Accion', id: 1 },
          { name: 'Humor', id: 2 },
        ],
      };

      tmdbRepoServiceSpy.getGenres.and.returnValue(of(mockGenres));

      moviesService.fetchGenders();

      tick();

      expect(tmdbRepoServiceSpy.getGenres).toHaveBeenCalledTimes(1);
    }));

    it('Then should fetch genresMovies and set them in the store', fakeAsync(() => {
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
      moviesService.genres = [
        { name: 'Accion', path: '1' },
        { name: 'Humor', path: '2' },
      ];
      tmdbRepoServiceSpy.getMoviesList.and.returnValue(of(mockMovies[0]));
      const result = moviesService.fetchGenderMovies(0);

      tick();

      expect(result).toEqual(['Accion', 'Humor']);
    }));

    afterEach(() => {
      TestBed.resetTestingModule();
    });
  });
});
