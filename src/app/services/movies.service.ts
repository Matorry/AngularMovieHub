import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { StateService } from './state.service';
import { TmdbRepoService } from './tmdb.repo.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private repo: TmdbRepoService, private state: StateService) {}

  fetchMoviesList(path: string): Observable<void> {
    return this.repo.getMoviesList(path).pipe(
      map((data) => {
        this.state.setMovieList(data);
      }),
      catchError((error) => {
        console.error('Error fetching movies:', error);
        return of(null);
      }),
      map(() => void 0)
    );
  }
}
