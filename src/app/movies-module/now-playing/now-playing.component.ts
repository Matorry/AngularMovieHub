import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit, OnDestroy {
  nowPlayingMovies: Movie[] = [];
  storeSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private movieService: MoviesService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.storeSubscription = this.store
      .getNowPlayingState()
      .subscribe((data) => {
        if (data.results && data.results.length > 0) {
          this.nowPlayingMovies = data.results;
        } else {
          this.loadNowPlaying();
        }
      });
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  loadNowPlaying() {
    this.movieService.fetchNowPlaying();
  }
}
