import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { CardPopularComponent } from './card-popular/card-popular.component';
import { ListPopularComponent } from './list-popular/list-popular.component';

@NgModule({
  declarations: [MoviesDashboardComponent, ListComponent, CardComponent, CardPopularComponent, ListPopularComponent],
  imports: [CommonModule],
})
export class MoviesModuleModule {}
