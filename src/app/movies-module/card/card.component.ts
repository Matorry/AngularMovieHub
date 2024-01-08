import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() movie: Movie | null = null;
  getImageUrl(backdropPath: string | null, w: number): string {
    if (backdropPath) {
      const baseUrl = `https://image.tmdb.org/t/p/w${w}/`;
      return baseUrl + backdropPath;
    }
    return '';
  }
}
