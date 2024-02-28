import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDBService {
  public movies: Record<string, string> = {
    TRENDING: 'trending/movie/day?language=en-US',
    POPULAR: 'movie/popular?language=en-US&page=1',
    TOP_RATING: 'movie/top_rated?language=en-US&page=1',
    UPCOMING: 'movie/upcoming?language=en-US&page=1',
  };

  public tv: Record<string, string> = {
    TRENDING: 'trending/tv/day?language=en-US',
    POPULAR: 'tv/popular?language=en-US&page=1',
    TOP_RATING: 'tv/top_rated?language=en-US&page=1',
    ON_THE_AIR: 'tv/on_the_air?language=en-US&page=1',
  };

  public URI_MOVIE_GENRES = 'genre/movie/list?language=en';
  public URI_TV_GENRES = 'genre/tv/list?language=en';

  getKeys(keys: Record<string, string>): string[] {
    return Object.keys(keys).map((key) => this.transformKey(key));
  }

  private transformKey(key: string): string {
    const transformedKey =
      key.charAt(0).toUpperCase() +
      key.slice(1).toLowerCase().replace(/_/g, ' ');
    return transformedKey;
  }
}
