import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie, Tv } from 'src/app/model/tmdb.model';
import { MovieCardCarousel } from './card-carousel.component';

describe('Given the MovieCardCarousel', () => {
  let component: MovieCardCarousel;
  let fixture: ComponentFixture<MovieCardCarousel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardCarousel],
    });
    fixture = TestBed.createComponent(MovieCardCarousel);
    component = fixture.componentInstance;
  });

  describe('When MovieCardCarousel is created', () => {
    it('Then should set backgroundImageUrl when movie changes', () => {
      const mockMovieWithBackdrop: Movie = {
        backdrop_path: '/example.jpg',
      } as Movie;
      const mockMovieWithoutBackdrop: Movie = {
        backdrop_path: '/example2.jpg',
      } as Movie;

      component.movie = mockMovieWithBackdrop;
      component.ngOnChanges();

      expect(component.backgroundImageUrl).toBe(
        'https://image.tmdb.org/t/p/original/example.jpg'
      );

      component.movie = mockMovieWithoutBackdrop;
      component.ngOnChanges();

      expect(component.backgroundImageUrl).toBe(
        'https://image.tmdb.org/t/p/original/example2.jpg'
      );
    });

    it('Then i call isMovie method ', () => {
      const testMovie = component.isMovie({} as Movie);
      expect(testMovie).toEqual(false);
    });

    it('Then i call isTvShow method ', () => {
      const testMovie = component.isTvShow({} as Tv);
      expect(testMovie).toEqual(false);
    });

    afterEach(() => {
      TestBed.resetTestingModule();
    });
  });
});
