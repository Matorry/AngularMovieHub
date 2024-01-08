import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { Movie, ReqWithDates } from 'src/app/model/tmdb.model';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';
import { MoviesDashboardComponent } from './movies-dashboard.component';

describe('Given the MoviesDashboardComponent', () => {
  let component: MoviesDashboardComponent;
  let fixture: ComponentFixture<MoviesDashboardComponent>;
  let dictionaryService: jasmine.SpyObj<DictionaryService>;
  let movieService: jasmine.SpyObj<MoviesService>;
  let storeService: jasmine.SpyObj<StoreService>;

  beforeEach(() => {
    dictionaryService = jasmine.createSpyObj('DictionaryService', [
      'getKeys',
      'dictionary',
    ]);
    movieService = jasmine.createSpyObj('MoviesService', ['fetchMoviesList']);
    storeService = jasmine.createSpyObj('StoreService', ['getMovieList']);

    TestBed.configureTestingModule({
      declarations: [MoviesDashboardComponent],
      providers: [
        { provide: DictionaryService, useValue: dictionaryService },
        { provide: MoviesService, useValue: movieService },
        { provide: StoreService, useValue: storeService },
      ],
    });

    fixture = TestBed.createComponent(MoviesDashboardComponent);
    component = fixture.componentInstance;
  });

  describe('When initialized', () => {
    it('Then should set titles and fetch movies', () => {
      const mockKeys = ['Action', 'Drama'];
      const mockMovies: ReqWithDates[] = [
        {
          dates: { maximum: '2', minimum: '1' },
          page: 1,
          results: [{} as Movie],
          total_pages: 1,
          total_results: 1,
        },
      ];
      const mockStoreData = new BehaviorSubject<ReqWithDates[]>(mockMovies);

      dictionaryService.getKeys.and.returnValue(mockKeys);
      movieService.fetchMoviesList.and.returnValue(of(undefined));
      storeService.getMovieList.and.returnValue(mockStoreData);

      component.ngOnInit();

      expect(dictionaryService.getKeys).toHaveBeenCalled();
      expect(movieService.fetchMoviesList).toHaveBeenCalledTimes(3);
      expect(storeService.getMovieList).toHaveBeenCalled();

      expect(component.titles).toEqual(mockKeys);
      expect(component.popularMovies).toEqual(mockMovies[0]);
    });

    it('Then should unsubscribe on destroy', () => {
      const mockStoreSubscription = jasmine.createSpyObj('Subscription', [
        'unsubscribe',
      ]);
      component.storeSubscription = mockStoreSubscription;

      component.ngOnDestroy();

      expect(mockStoreSubscription.unsubscribe).toHaveBeenCalled();
    });
  });
});
