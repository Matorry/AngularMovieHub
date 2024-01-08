import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { StoreService } from './store.service';
import { TmdbRepoService } from './tmdb.repo.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private repo: TmdbRepoService, private store: StoreService) {}

  fetchMoviesList(path: string): Observable<void> {
    return this.repo.getMoviesList(path).pipe(
      map((data) => {
        this.store.setMovieList(data);
      }),
      catchError((error) => {
        console.error('Error fetching movies:', error);
        return of(null);
      }),
      map(() => void 0)
    );
  }
}
