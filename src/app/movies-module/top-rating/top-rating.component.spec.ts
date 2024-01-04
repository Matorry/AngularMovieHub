import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Movie, Req } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';
import { CardComponent } from '../card/card.component';
import { ListComponent } from '../list/list.component';
import { TopRatingComponent } from './top-rating.component';

describe('Given the TopRatingComponent class', () => {
  let component: TopRatingComponent;
  let fixture: ComponentFixture<TopRatingComponent>;
  let storeService: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatingComponent, ListComponent, CardComponent],
      imports: [HttpClientTestingModule],
      providers: [StoreService, MoviesService],
    });

    fixture = TestBed.createComponent(TopRatingComponent);
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
      spyOn(storeService, 'getTopRatingState').and.returnValue(
        mockBehaviorSubject
      );

      fixture.detectChanges();

      expect(component.topRatingMovies[0].title).toContain('Movie 1');
      expect(component.topRatingMovies[1].title).toContain('Movie 2');
    });

    it('Then should display upcoming movies from the store', () => {
      const mockData = {
        results: [] as Movie[],
      } as Req;

      const mockBehaviorSubject = new BehaviorSubject(mockData);
      spyOn(storeService, 'getTopRatingState').and.returnValue(
        mockBehaviorSubject
      );

      fixture.detectChanges();

      expect(storeService.getTopRatingState).toHaveBeenCalledTimes(1);
    });
  });
});
