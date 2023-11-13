import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { TmdbRepoService } from './tmdb.repo.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private repo: TmdbRepoService, private store: StoreService) {}

  fetchNowPlaying(page?: string): void {
    const pageNumber = page ? page : '1';
    this.repo.getNowPlaying(pageNumber).subscribe((data) => {
      this.store.updateNowPlayingState(data);
    });
  }

  fetchPopular(page?: string): void {
    const pageNumber = page ? page : '1';
    this.repo.getPopular(pageNumber).subscribe((data) => {
      this.store.updatePopularState(data);
    });
  }

  fetchTopRating(page?: string): void {
    const pageNumber = page ? page : '1';
    this.repo.getTopRating(pageNumber).subscribe((data) => {
      this.store.updateTopRatingState(data);
    });
  }

  fetchUpcoming(page?: string): void {
    const pageNumber = page ? page : '1';
    this.repo.getUpcomming(pageNumber).subscribe((data) => {
      this.store.updateUpcomingState(data);
    });
  }
}
