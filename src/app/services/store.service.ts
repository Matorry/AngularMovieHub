import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Req, ReqWithDates } from '../model/tmdb.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private nowPlaying$: BehaviorSubject<ReqWithDates> = new BehaviorSubject(
    {} as ReqWithDates
  );
  private popular$: BehaviorSubject<Req> = new BehaviorSubject({} as Req);
  private topRating$: BehaviorSubject<Req> = new BehaviorSubject({} as Req);
  private upcoming$: BehaviorSubject<ReqWithDates> = new BehaviorSubject(
    {} as ReqWithDates
  );

  constructor() {}

  getNowPlayingState(): BehaviorSubject<ReqWithDates> {
    return this.nowPlaying$;
  }

  getPopularState(): BehaviorSubject<Req> {
    return this.popular$;
  }

  getTopRatingState(): BehaviorSubject<Req> {
    return this.topRating$;
  }

  getUpcomingState(): BehaviorSubject<ReqWithDates> {
    return this.upcoming$;
  }

  updateNowPlayingState(newState: ReqWithDates): void {
    this.nowPlaying$.next(newState);
  }

  updatePopularState(newState: Req): void {
    this.popular$.next(newState);
  }

  updateTopRatingState(newState: Req): void {
    this.topRating$.next(newState);
  }

  updateUpcomingState(newState: ReqWithDates): void {
    this.upcoming$.next(newState);
  }
}
