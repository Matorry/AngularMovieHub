import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BudgetFormatPipe } from '../pipes/budget.format.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { MovieCardCarousel } from './card-carousel/card-carousel.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { MovieListCarousel } from './list-carousel/list-carousel.component';
import { ListComponent } from './list/list.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { PeopleCardComponent } from './people.card/people.card.component';
import { PeopleListComponent } from './people.list/people.list.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { CardVideoComponent } from './card-video/card-video.component';
import { VideoModalComponent } from './video-modal/video-modal.component';

@NgModule({
  declarations: [
    MoviesDashboardComponent,
    ListComponent,
    CardComponent,
    MovieCardCarousel,
    MovieListCarousel,
    TruncatePipe,
    BudgetFormatPipe,
    DetailComponent,
    PeopleListComponent,
    PeopleCardComponent,
    ListVideoComponent,
    CardVideoComponent,
    VideoModalComponent,
  ],
  imports: [CommonModule, InfiniteScrollModule, RouterModule],
})
export class MoviesModuleModule {}
