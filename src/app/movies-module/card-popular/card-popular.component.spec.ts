import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/model/tmdb.model';
import { CardPopularComponent } from './card-popular.component';

describe('CardPopularComponent', () => {
  let component: CardPopularComponent;
  let fixture: ComponentFixture<CardPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPopularComponent],
    });
    fixture = TestBed.createComponent(CardPopularComponent);
    component = fixture.componentInstance;
  });

  it('should set backgroundImageUrl when movie changes', () => {
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

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
