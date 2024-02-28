import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concat } from 'rxjs';
import { ReqWithDates } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StateService } from 'src/app/services/state.service';
import { TheMovieDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss'],
})
export class MoviesDashboardComponent implements OnInit, OnDestroy {
  movieList: ReqWithDates[] = [];
  stateSubscription: Subscription = Subscription.EMPTY;
  titles: string[] = [];
  popularMovies: ReqWithDates | undefined;
  counter = 0;
  stateIsMovies!: boolean;

  constructor(
    private movieService: MoviesService,
    private state: StateService,
    private tmdbService: TheMovieDBService
  ) {}

  ngOnInit() {
    this.state.getIsMoviesSelect().subscribe({
      next: (data) => {
        this.stateIsMovies = data;
        this.fetchMovies();
      },
    });
  }

  ngOnDestroy() {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

  fetchMovies() {
    this.movieList = [];
    this.titles = [];
    this.counter = 0;
    this.movieService.fetchGenders();

    if (this.stateIsMovies) {
      this.titles = this.tmdbService.getKeys(this.tmdbService.movies);
      const movieRoutes = Object.values(this.tmdbService.movies);
      const observables = movieRoutes.map((route) =>
        this.movieService.fetchMoviesList(route)
      );

      concat(...observables).subscribe(() => {
        this.stateSubscription = this.state.getMovieList().subscribe((data) => {
          this.popularMovies = data[0];
          this.movieList = data.slice(1);
        });
      });
    } else {
      this.titles = this.tmdbService.getKeys(this.tmdbService.tv);
      const movieRoutes = Object.values(this.tmdbService.tv);
      const observables = movieRoutes.map((route) =>
        this.movieService.fetchMoviesList(route)
      );

      concat(...observables).subscribe(() => {
        this.stateSubscription = this.state.getMovieList().subscribe((data) => {
          this.popularMovies = data[0];
          this.movieList = data.slice(1);
        });
      });
    }
  }

  onScrollDown(): void {
    this.titles = [
      ...this.titles,
      ...this.movieService.fetchGenderMovies(this.counter),
    ];
    this.counter += 4;
  }
}
