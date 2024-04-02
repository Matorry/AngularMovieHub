import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieCreditsData } from '../model/tmdb.crew.model';
import { MovieDetail, SerieDetail } from '../model/tmdb.detail.model';
import { ReqWithDates, VideoReq } from '../model/tmdb.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private genres$: BehaviorSubject<{ name: string; path: string }[]> =
    new BehaviorSubject([] as { name: string; path: string }[]);
  private moviesCategories$: BehaviorSubject<ReqWithDates[]> =
    new BehaviorSubject([] as ReqWithDates[]);
  private isMoviesSelect$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private movieDetail$: BehaviorSubject<{
    movie: MovieDetail;
    credits: MovieCreditsData;
    videos: VideoReq;
  }> = new BehaviorSubject({
    movie: {} as MovieDetail,
    credits: {} as MovieCreditsData,
    videos: {} as VideoReq,
  });
  private serieDetail$: BehaviorSubject<SerieDetail> = new BehaviorSubject(
    {} as SerieDetail
  );

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

  getIsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  setIsLoadingt(isLoading: boolean): void {
    this.isLoading$.next(isLoading);
  }

  getMovieDetail(): Observable<{
    movie: MovieDetail;
    credits: MovieCreditsData;
    videos: VideoReq;
  }> {
    return this.movieDetail$.asObservable();
  }

  setMovieDetail(newState: {
    movie: MovieDetail;
    credits: MovieCreditsData;
    videos: VideoReq;
  }): void {
    this.movieDetail$.next(newState);
  }

  getSerieDetail(): Observable<SerieDetail> {
    return this.serieDetail$.asObservable();
  }

  setSerieDetail(newState: SerieDetail): void {
    this.serieDetail$.next(newState);
  }
}
