import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Movie, ReqWithDates } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';
import { UpcomingMoviesComponent } from './upcoming-movies.component';

describe('Given the UpcomingMoviesComponent class', () => {
  let component: UpcomingMoviesComponent;
  let fixture: ComponentFixture<UpcomingMoviesComponent>;
  let storeService: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingMoviesComponent],
      imports: [HttpClientTestingModule],
      providers: [StoreService, MoviesService],
    });

    fixture = TestBed.createComponent(UpcomingMoviesComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService);
  });
  describe('When i instance it', () => {
    it('Then should create', () => {
      expect(component).toBeTruthy();
    });

    it('Then should display upcoming movies from the store', () => {
      const mockData = {
        results: [
          { id: 1, title: 'Movie 1' } as Movie,
          { id: 2, title: 'Movie 2' } as Movie,
        ],
      } as ReqWithDates;

      const mockBehaviorSubject = new BehaviorSubject(mockData);
      spyOn(storeService, 'getUpcomingState').and.returnValue(
        mockBehaviorSubject
      );

      fixture.detectChanges();

      expect(component.upcomingMovies[0].title).toContain('Movie 1');
      expect(component.upcomingMovies[1].title).toContain('Movie 2');
    });

    it('Then should display upcoming movies from the store', () => {
      const mockData = {
        results: [] as Movie[],
      } as ReqWithDates;

      const mockBehaviorSubject = new BehaviorSubject(mockData);
      spyOn(storeService, 'getUpcomingState').and.returnValue(
        mockBehaviorSubject
      );

      fixture.detectChanges();

      expect(storeService.getUpcomingState).toHaveBeenCalledTimes(1);
    });
  });
});
