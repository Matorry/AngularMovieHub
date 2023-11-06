import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Req, ReqWithDates } from '../model/tmdb.model';

@Injectable({
  providedIn: 'root',
})
export class TmdbRepoService {
  url: string;
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY1NjVjYjk1ZjBlYzY2NjlmNzM0MGVkODMyYTIwMSIsInN1YiI6IjY1NDFkOGU0MTM2NTQ1MDBjNjQyY2Y0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RhrFDYd7nFQXd1VygNrGKHexVkmg4LhiM7jFi2RlbV0';

  constructor(private http: HttpClient) {
    this.url = 'https://api.themoviedb.org/3/movie';
  }

  getNowPlaying(page: string): Observable<ReqWithDates> {
    return this.http.get(
      this.url + '/now_playing?language=en-US&page=' + page,
      {
        headers: {
          ['Authorization']: `Bearer ${this.token}`,
        },
      }
    ) as Observable<ReqWithDates>;
  }

  getPopular(page: string): Observable<Req> {
    return this.http.get(this.url + '/popular?language=en-US&page=' + page, {
      headers: {
        ['Authorization']: `Bearer ${this.token}`,
      },
    }) as Observable<Req>;
  }

  getTopRating(page: string): Observable<Req> {
    return this.http.get(this.url + '/top_rated?language=en-US&page=' + page, {
      headers: {
        ['Authorization']: `Bearer ${this.token}`,
      },
    }) as Observable<Req>;
  }

  getUpcomming(page: string): Observable<ReqWithDates> {
    return this.http.get(this.url + '/upcoming?language=en-US&page=' + page, {
      headers: {
        ['Authorization']: `Bearer ${this.token}`,
      },
    }) as Observable<ReqWithDates>;
  }

  getById(id: string): Observable<Movie> {
    return this.http.get(this.url + `/${id}?language=en-US`, {
      headers: {
        ['Authorization']: `Bearer ${this.token}`,
      },
    }) as Observable<Movie>;
  }

  getImage(id: string): Observable<Movie> {
    return this.http.get(this.url + `/${id}/images`, {
      headers: {
        ['Authorization']: `Bearer ${this.token}`,
      },
    }) as Observable<Movie>;
  }
}
