import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { StateService } from './state.service';
import { TmdbRepoService } from './tmdb.repo.service';
import { TheMovieDBService } from './tmdb.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  genres: { name: string; path: string }[] = [];
  stateIsMovies!: boolean;
  constructor(
    private repo: TmdbRepoService,
    private state: StateService,
    private tmdbService: TheMovieDBService
  ) {
    this.state.getIsMoviesSelect().subscribe({
      next: (data) => (this.stateIsMovies = data),
    });
  }

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

  fetchGenders(): void {
    this.genres = [];
    if (this.stateIsMovies) {
      this.repo
        .getGenres(this.tmdbService.URI_MOVIE_GENRES)
        .subscribe((data) => {
          data.genres.map(
            (genre) =>
              (this.genres = [
                ...this.genres,
                {
                  name: genre.name,
                  path: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id.toString()}`,
                },
              ])
          );
          this.state.setGenres(this.genres);
        });
    } else {
      this.repo.getGenres(this.tmdbService.URI_TV_GENRES).subscribe((data) => {
        data.genres.map(
          (genre) =>
            (this.genres = [
              ...this.genres,
              {
                name: genre.name,
                path: `/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id.toString()}`,
              },
            ])
        );
        this.state.setGenres(this.genres);
      });
    }
  }

  fetchGenderMovies(counter: number): string[] {
    const genres = this.genres.slice(counter, counter + 4);
    genres.forEach((genre) => {
      this.fetchMoviesList(genre.path).subscribe();
    });
    return genres.map((genre) => genre.name);
  }
}
