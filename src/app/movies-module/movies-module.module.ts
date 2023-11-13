import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TopRatingComponent } from './top-rating/top-rating.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';

@NgModule({
  declarations: [
    MoviesDashboardComponent,
    ListComponent,
    CardComponent,
    NowPlayingComponent,
    PopularMoviesComponent,
    TopRatingComponent,
    UpcomingMoviesComponent,
  ],
  imports: [CommonModule],
  exports: [
    NowPlayingComponent,
    PopularMoviesComponent,
    TopRatingComponent,
    UpcomingMoviesComponent,
  ],
})
export class MoviesModuleModule {}
