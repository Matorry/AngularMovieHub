import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMovieComponent } from './movies-module/detail-movie/detail-movie.component';
import { DetailTvshowComponent } from './movies-module/detail-tvshow/detail-tvshow.component';
import { MoviesDashboardComponent } from './movies-module/movies-dashboard/movies-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MoviesDashboardComponent },
  { path: 'movie/:id', component: DetailMovieComponent },
  { path: 'tvshow/:id', component: DetailTvshowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
