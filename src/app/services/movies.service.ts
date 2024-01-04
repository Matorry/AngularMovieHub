import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { TmdbRepoService } from './tmdb.repo.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private repo: TmdbRepoService, private store: StoreService) {}

  fetchMoviesList(path: string): void {
    this.repo.getMoviesList(path).subscribe((data) => {
      this.store.setMovieList(data);
    });
  }
}
