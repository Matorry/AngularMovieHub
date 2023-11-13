import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  popularMovies: Movie[] = [];
  storeSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private movieService: MoviesService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.storeSubscription = this.store.getPopularState().subscribe((data) => {
      if (data.results && data.results.length > 0) {
        this.popularMovies = data.results;
      } else {
        this.loadPopularMovies();
      }
    });
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  loadPopularMovies() {
    this.movieService.fetchPopular();
  }
}
