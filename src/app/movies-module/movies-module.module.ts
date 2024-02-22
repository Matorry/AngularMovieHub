import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { MovieCardCarousel } from './card-carousel/card-carousel.component';
import { CardComponent } from './card/card.component';
import { MovieListCarousel } from './list-carousel/list-carousel.component';
import { ListComponent } from './list/list.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';

@NgModule({
  declarations: [
    MoviesDashboardComponent,
    ListComponent,
    CardComponent,
    MovieCardCarousel,
    MovieListCarousel,
    TruncatePipe,
  ],
  imports: [CommonModule],
})
export class MoviesModuleModule {}
