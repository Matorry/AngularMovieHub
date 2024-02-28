import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReqWithDates } from '../model/tmdb.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private genres$: BehaviorSubject<{ name: string; path: string }[]> =
    new BehaviorSubject([] as { name: string; path: string }[]);
  private moviesCategories$: BehaviorSubject<ReqWithDates[]> =
    new BehaviorSubject([] as ReqWithDates[]);
  private isMoviesSelect$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  getGenres(): Observable<{ name: string; path: string }[]> {
    return this.genres$.asObservable();
  }

  setGenres(newState: { name: string; path: string }[]): void {
    this.genres$.next(newState);
  }

  getMovieList(): Observable<ReqWithDates[]> {
    return this.moviesCategories$.asObservable();
  }

  setMovieList(newData: ReqWithDates): void {
    let data = this.moviesCategories$.value;
    data.push(newData);
    this.moviesCategories$.next(data);
  }

  getIsMoviesSelect(): Observable<boolean> {
    return this.isMoviesSelect$.asObservable();
  }

  setIsMoviesSelect(isMovies: boolean): void {
    this.moviesCategories$.next([] as ReqWithDates[]);
    this.isMoviesSelect$.next(isMovies);
  }
}
