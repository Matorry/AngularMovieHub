import { Component } from '@angular/core';
import { Subscription, concat } from 'rxjs';
import { ReqWithDates } from 'src/app/model/tmdb.model';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { MoviesService } from 'src/app/services/movies.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss'],
})
export class MoviesDashboardComponent {
  movieList: ReqWithDates[] = [];
  stateSubscription: Subscription = Subscription.EMPTY;
  titles: string[] = [];
  popularMovies: ReqWithDates | undefined;
  counter = 0;

  constructor(
    private movieService: MoviesService,
    private state: StateService,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit() {
    this.movieService.fetchGenders();

    this.titles = this.dictionaryService.getKeys();
    const movieRoutes = Object.values(this.dictionaryService.dictionary);

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

  onScrollDown(): void {
    this.titles = [
      ...this.titles,
      ...this.movieService.fetchGenderMovies(this.counter),
    ];
    this.counter += 4;
  }

  ngOnDestroy() {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }
}
