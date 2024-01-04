import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, ReqWithDates } from '../model/tmdb.model';

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
}

// discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres={{genreID}}
