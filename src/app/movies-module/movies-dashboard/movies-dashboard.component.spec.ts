import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NowPlayingComponent } from '../now-playing/now-playing.component';
import { PopularMoviesComponent } from '../popular-movies/popular-movies.component';
import { TopRatingComponent } from '../top-rating/top-rating.component';
import { UpcomingMoviesComponent } from '../upcoming-movies/upcoming-movies.component';
import { MoviesDashboardComponent } from './movies-dashboard.component';

describe('MoviesDashboardComponent', () => {
  let component: MoviesDashboardComponent;
  let fixture: ComponentFixture<MoviesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MoviesDashboardComponent,
        NowPlayingComponent,
        PopularMoviesComponent,
        TopRatingComponent,
        UpcomingMoviesComponent,
      ],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(MoviesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
