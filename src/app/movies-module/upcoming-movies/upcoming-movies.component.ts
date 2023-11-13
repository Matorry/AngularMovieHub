import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss'],
})
export class UpcomingMoviesComponent implements OnInit, OnDestroy {
  upcomingMovies: Movie[] = [];
  storeSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private movieService: MoviesService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.storeSubscription = this.store.getUpcomingState().subscribe((data) => {
      if (data.results && data.results.length > 0) {
        this.upcomingMovies = data.results;
      } else {
        this.loadUpcomingMovies();
      }
    });
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  loadUpcomingMovies() {
    this.movieService.fetchUpcoming();
  }
}
