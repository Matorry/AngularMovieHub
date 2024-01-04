import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReqWithDates } from 'src/app/model/tmdb.model';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss'],
})
export class MoviesDashboardComponent {
  movieList: ReqWithDates[] = [];
  storeSubscription: Subscription = Subscription.EMPTY;
  titles: string[] = [];

  constructor(
    private movieService: MoviesService,
    private store: StoreService,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit() {
    this.titles = this.dictionaryService.getKeys();
    const movieRoutes = Object.values(this.dictionaryService.dictionary);
    movieRoutes.forEach((route) => this.movieService.fetchMoviesList(route));
    this.storeSubscription = this.store.getMovieList().subscribe((data) => {
      this.movieList = data;
    });
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
