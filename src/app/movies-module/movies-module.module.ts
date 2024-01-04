import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';

@NgModule({
  declarations: [MoviesDashboardComponent, ListComponent, CardComponent],
  imports: [CommonModule],
})
export class MoviesModuleModule {}
