import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-top-rating',
  templateUrl: './top-rating.component.html',
  styleUrls: ['./top-rating.component.scss'],
})
export class TopRatingComponent implements OnInit, OnDestroy {
  topRatingMovies: Movie[] = [];
  storeSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private movieService: MoviesService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.storeSubscription = this.store
      .getTopRatingState()
      .subscribe((data) => {
        if (data.results && data.results.length > 0) {
          this.topRatingMovies = data.results;
        } else {
          this.loadTopRatingState();
        }
      });
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  loadTopRatingState() {
    this.movieService.fetchTopRating();
  }
}
