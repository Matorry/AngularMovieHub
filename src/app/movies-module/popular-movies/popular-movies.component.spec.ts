import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Movie, Req } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';
import { CardComponent } from '../card/card.component';
import { ListComponent } from '../list/list.component';
import { PopularMoviesComponent } from './popular-movies.component';

describe('Given the UpcomingMoviesComponent class', () => {
  let component: PopularMoviesComponent;
  let fixture: ComponentFixture<PopularMoviesComponent>;
  let storeService: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularMoviesComponent, ListComponent, CardComponent],
      imports: [HttpClientTestingModule],
      providers: [StoreService, MoviesService],
    });

    fixture = TestBed.createComponent(PopularMoviesComponent);
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
      } as Req;

      const mockBehaviorSubject = new BehaviorSubject(mockData);
      spyOn(storeService, 'getPopularState').and.returnValue(
        mockBehaviorSubject
      );

      fixture.detectChanges();

      expect(component.popularMovies[0].title).toContain('Movie 1');
      expect(component.popularMovies[1].title).toContain('Movie 2');
    });

    it('Then should display upcoming movies from the store', () => {
      const mockData = {
        results: [] as Movie[],
      } as Req;

      const mockBehaviorSubject = new BehaviorSubject(mockData);
      spyOn(storeService, 'getPopularState').and.returnValue(
        mockBehaviorSubject
      );

      fixture.detectChanges();

      expect(storeService.getPopularState).toHaveBeenCalledTimes(1);
    });
  });
});
