import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCreditsData, TvCreditsData } from '../model/tmdb.crew.model';
import { MovieDetail, Season, SerieDetail } from '../model/tmdb.detail.model';
import { Genre, Movie, ReqWithDates, VideoReq } from '../model/tmdb.model';

@Injectable({
  providedIn: 'root',
})
export class TmdbRepoService {
  private url = 'https://api.themoviedb.org/3/';
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY1NjVjYjk1ZjBlYzY2NjlmNzM0MGVkODMyYTIwMSIsInN1YiI6IjY1NDFkOGU0MTM2NTQ1MDBjNjQyY2Y0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RhrFDYd7nFQXd1VygNrGKHexVkmg4LhiM7jFi2RlbV0';

  constructor(private http: HttpClient) {}

  getMoviesList(path: string): Observable<ReqWithDates> {
    return this.http.get<ReqWithDates>(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/${id}?language=en-US`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getGenres(path: string): Observable<{ genres: Genre[] }> {
    return this.http.get<{ genres: Genre[] }>(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getMovieDetail(path: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getSerieDetail(path: string): Observable<SerieDetail> {
    return this.http.get<SerieDetail>(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getMovieCredits(path: string): Observable<MovieCreditsData> {
    return this.http.get<MovieCreditsData>(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getTvCredits(path: string): Observable<TvCreditsData> {
    return this.http.get<TvCreditsData>(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getTvSeason(path: string): Observable<Season> {
    return this.http.get<Season>(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getVideoList(path: string): Observable<VideoReq> {
    return this.http.get<VideoReq>(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
