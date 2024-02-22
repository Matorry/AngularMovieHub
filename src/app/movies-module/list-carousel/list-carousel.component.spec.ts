import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Movie } from 'src/app/model/tmdb.model';
import { MovieCardCarousel } from '../card-carousel/card-carousel.component';
import { MovieListCarousel } from './list-carousel.component';

describe('Given the MovieListCarousel', () => {
  let component: MovieListCarousel;
  let fixture: ComponentFixture<MovieListCarousel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListCarousel, MovieCardCarousel],
    });
    fixture = TestBed.createComponent(MovieListCarousel);
    component = fixture.componentInstance;
  });

  describe('When MovieListCarousel is created', () => {
    it('Then should create', () => {
      spyOn(component, 'navigateToNext');
      component.ngOnInit();
      expect(component).toBeTruthy();
      expect(component.navigateToNext).toHaveBeenCalled();
    });

    it('Then should increment counter when calling navigateToNext', () => {
      const initialCounter = component.counter;
      component.navigateToNext();
      expect(component.counter).toEqual(initialCounter + 1);
    });

    it('Then should decrement counter when calling navigateToPrevious', () => {
      const initialCounter = component.counter;
      component.navigateToPrevious();
      expect(component.counter).toEqual(initialCounter);
    });

    it('Then should reset counter to 0 when it exceeds movie length', () => {
      component.counter = component.movies.length - 1;
      component.navigateToNext();
      expect(component.counter).toEqual(0);
    });

    it('Then should update circles when calling updateCircles', () => {
      component.movies = [{} as Movie, {} as Movie, {} as Movie];
      component.updateCircles();
      expect(component.circles[component.counter]).toBe(true);
    });

    it('Then should load movie with given index', () => {
      const index = 2;
      component.loadMovie(index);
      expect(component.counter).toEqual(index);
      expect(component.circles[component.counter]).toBe(true);
    });

    it('Then should auto navigate to next after a certain interval', fakeAsync(() => {
      spyOn(component, 'controlMovieList');
      component.autoNavigateToNext();
      tick(3000);
      fixture.detectChanges();
      expect(component.controlMovieList).toHaveBeenCalledWith('+');
      clearInterval(component.intervalId);
    }));

    afterEach(() => {
      TestBed.resetTestingModule();
    });
  });
});
