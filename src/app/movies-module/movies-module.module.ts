import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BudgetFormatPipe } from '../pipes/budget.format.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { MovieCardCarousel } from './card-carousel/card-carousel.component';
import { CardVideoComponent } from './card-video/card-video.component';
import { CardComponent } from './card/card.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { DetailTvshowComponent } from './detail-tvshow/detail-tvshow.component';
import { MovieListCarousel } from './list-carousel/list-carousel.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { ListComponent } from './list/list.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { PeopleCardComponent } from './people.card/people.card.component';
import { PeopleListComponent } from './people.list/people.list.component';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

@NgModule({
  declarations: [
    MoviesDashboardComponent,
    ListComponent,
    CardComponent,
    MovieCardCarousel,
    MovieListCarousel,
    TruncatePipe,
    BudgetFormatPipe,
    DetailMovieComponent,
    PeopleListComponent,
    PeopleCardComponent,
    ListVideoComponent,
    CardVideoComponent,
    VideoModalComponent,
    DetailTvshowComponent,
    EpisodeDetailComponent,
  ],
  imports: [CommonModule, InfiniteScrollModule, RouterModule, MatTabsModule],
})
export class MoviesModuleModule {}
