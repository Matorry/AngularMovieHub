import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReqWithDates } from '../model/tmdb.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private genres$: BehaviorSubject<{ name: string; path: string }[]> =
    new BehaviorSubject([] as { name: string; path: string }[]);
  private moviesCategories$: BehaviorSubject<ReqWithDates[]> =
    new BehaviorSubject([] as ReqWithDates[]);

  getGenres(): BehaviorSubject<{ name: string; path: string }[]> {
    return this.genres$;
  }

  setGenres(newState: { name: string; path: string }[]): void {
    this.genres$.next(newState);
  }

  getMovieList(): BehaviorSubject<ReqWithDates[]> {
    return this.moviesCategories$;
  }

  setMovieList(newData: ReqWithDates): void {
    let data = this.getMovieList().getValue();
    data.push(newData);
    this.moviesCategories$.next(data);
  }
}
