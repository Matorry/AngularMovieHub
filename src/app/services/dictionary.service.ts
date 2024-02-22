import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  public dictionary: Record<string, string> = {
    POPULAR: 'movie/popular?language=en-US&page=1',
    TOP_RATING: 'movie/top_rated?language=en-US&page=1',
    UPCOMING: 'movie/upcoming?language=en-US&page=1',
  };

  public URI_GENRES = 'genre/movie/list?language=en';

  getKeys(): string[] {
    return Object.keys(this.dictionary).map((key) => this.transformKey(key));
  }

  private transformKey(key: string): string {
    const transformedKey =
      key.charAt(0).toUpperCase() +
      key.slice(1).toLowerCase().replace(/_/g, ' ');
    return transformedKey;
  }
}
