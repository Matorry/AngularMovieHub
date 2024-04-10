import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { MovieCreditsData } from '../model/tmdb.crew.model';
import { MovieDetail, Season, SerieDetail } from '../model/tmdb.detail.model';
import { VideoReq } from '../model/tmdb.model';
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

  fetchMoviesDetails(id: string) {
    const movieData: {
      movie: MovieDetail;
      credits: MovieCreditsData;
      videos: VideoReq;
    } = {
      movie: {} as MovieDetail,
      credits: {} as MovieCreditsData,
      videos: {} as VideoReq,
    };

    this.repo.getMovieDetail(`movie/${id}?language=en-US`).subscribe({
      next: (data) => {
        movieData.movie = data;
        this.repo
          .getMovieCredits(`movie/${id}/credits?language=en-US`)
          .subscribe({
            next: (creditsData) => {
              movieData.credits = creditsData;
              this.repo
                .getVideoList(`movie/${id}/videos?language=en-US`)
                .subscribe({
                  next: (data) => {
                    movieData.videos = data;
                    this.state.setMovieDetail(movieData);
                    this.state.setIsLoadingt(false);
                  },
                });
            },
          });
      },
    });
  }

  fetchSerieDetails(id: string) {
    const serieData: {
      serie: SerieDetail;
      currentSeason: Season;
    } = {
      serie: {} as SerieDetail,
      currentSeason: {} as Season,
    };
    this.repo.getSerieDetail(`tv/${id}?language=en-US`).subscribe({
      next: (data) => {
        serieData.serie = data;
        this.repo
          .getTvSeason(
            `tv/${id}/season/${data.seasons[0].season_number}?language=en-US`
          )
          .subscribe({
            next: (data) => (serieData.currentSeason = data),
          });
        this.state.setSerieDetail(serieData);
        this.state.setIsLoadingt(false);
      },
    });
  }

  changeSeason(id: number, season: string) {
    let currentState: {
      serie: SerieDetail;
      currentSeason: Season;
    };
    this.state
      .getSerieDetail()
      .subscribe({ next: (data) => (currentState = data) });
    this.repo
      .getTvSeason(`tv/${id}/season/${season}?language=en-US`)
      .subscribe({
        next: (data) =>
          this.state.setSerieDetail({
            serie: currentState.serie,
            currentSeason: data,
          }),
      });
  }
}
