import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Genre, ReqWithDates } from '../model/tmdb.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private genres$: BehaviorSubject<Genre[]> = new BehaviorSubject(
    [] as Genre[]
  );
  private moviesCategories$: BehaviorSubject<ReqWithDates[]> =
    new BehaviorSubject([] as ReqWithDates[]);

  getGenres(): BehaviorSubject<Genre[]> {
    return this.genres$;
  }

  setGenres(newState: Genre[]): void {
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
