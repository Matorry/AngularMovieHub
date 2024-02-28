import { Component, Input } from '@angular/core';
import { Movie, Tv } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() movie: Movie | Tv | null = null;

  isMovie(item: Movie | Tv): item is Movie {
    return (item as Movie).title !== undefined;
  }

  isTvShow(item: Movie | Tv): item is Tv {
    return (item as Tv).original_name !== undefined;
  }

  getImageUrl(posterPath: string | null, w: number): string {
    const baseUrl = `https://image.tmdb.org/t/p/w${w}/`;
    return posterPath ? baseUrl + posterPath : '';
  }
}
