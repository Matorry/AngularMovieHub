import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() movie: Movie | null = null;
  @Input() premiere: string = '';
  constructor(private service: MoviesService) {}
  getImageUrl(backdropPath: string | null, w: number): string {
    if (backdropPath) {
      const baseUrl = `https://image.tmdb.org/t/p/w${w}/`;
      return baseUrl + backdropPath;
    }
    return '';
  }
}
