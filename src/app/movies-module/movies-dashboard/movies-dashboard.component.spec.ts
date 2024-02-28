import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Movie, ReqWithDates, Tv } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StateService } from 'src/app/services/state.service';
import { MoviesDashboardComponent } from './movies-dashboard.component';

describe('Given the MoviesDashboardComponent', () => {
  let component: MoviesDashboardComponent;
  let fixture: ComponentFixture<MoviesDashboardComponent>;
  let moviesService: jasmine.SpyObj<MoviesService>;
  let stateService: jasmine.SpyObj<StateService>;

  beforeEach(() => {
    moviesService = jasmine.createSpyObj('MoviesService', [
      'fetchGenders',
      'fetchMoviesList',
      'fetchGenderMovies',
    ]);
    stateService = jasmine.createSpyObj('StateService', [
      'getIsMoviesSelect',
      'getMovieList',
    ]);

    TestBed.configureTestingModule({
      declarations: [MoviesDashboardComponent],
      providers: [
        { provide: MoviesService, useValue: moviesService },
        { provide: StateService, useValue: stateService },
      ],
    });

    fixture = TestBed.createComponent(MoviesDashboardComponent);
    component = fixture.componentInstance;
  });

  describe('When initialized', () => {
    it('Then should set titles and fetch movies', () => {
      const mockKeys = ['Trending', 'Popular', 'Top rating', 'Upcoming'];
      const mockMovies: ReqWithDates[] = [
        {
          dates: { maximum: '2', minimum: '1' },
          page: 1,
          results: [{} as Movie],
          total_pages: 1,
          total_results: 1,
        },
      ];

      stateService.getIsMoviesSelect.and.returnValue(of(true));
      stateService.getMovieList.and.returnValue(of(mockMovies));
      moviesService.fetchGenders.and.returnValue();
      moviesService.fetchMoviesList.and.returnValue(of(undefined));

      component.ngOnInit();

      expect(stateService.getIsMoviesSelect).toHaveBeenCalled();
      expect(moviesService.fetchMoviesList).toHaveBeenCalledTimes(4);
      expect(stateService.getMovieList).toHaveBeenCalled();

      expect(component.titles).toEqual(mockKeys);
      expect(component.popularMovies).toEqual(mockMovies[0]);
    });

    it('Then should set titles and fetch series', () => {
      const mockKeys = ['Trending', 'Popular', 'Top rating', 'On the air'];
      const mockSeries: ReqWithDates[] = [
        {
          dates: { maximum: '2', minimum: '1' },
          page: 1,
          results: [{} as Tv],
          total_pages: 1,
          total_results: 1,
        },
      ];

      stateService.getIsMoviesSelect.and.returnValue(of(false));
      stateService.getMovieList.and.returnValue(of(mockSeries));
      moviesService.fetchGenders.and.returnValue();
      moviesService.fetchMoviesList.and.returnValue(of(undefined));

      component.ngOnInit();

      expect(stateService.getIsMoviesSelect).toHaveBeenCalled();
      expect(moviesService.fetchMoviesList).toHaveBeenCalledTimes(4);
      expect(stateService.getMovieList).toHaveBeenCalled();

      expect(component.titles).toEqual(mockKeys);
      expect(component.popularMovies).toEqual(mockSeries[0]);
    });

    it('Then should scroll down', () => {
      moviesService.fetchGenderMovies.and.returnValue(['']);

      component.onScrollDown();

      expect(moviesService.fetchGenderMovies).toHaveBeenCalled();
    });

    it('Then should unsubscribe on destroy', () => {
      const mockStoreSubscription = jasmine.createSpyObj('Subscription', [
        'unsubscribe',
      ]);
      component.stateSubscription = mockStoreSubscription;

      component.ngOnDestroy();

      expect(mockStoreSubscription.unsubscribe).toHaveBeenCalled();
    });
  });
});
