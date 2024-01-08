import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-card-popular',
  templateUrl: './card-popular.component.html',
  styleUrls: ['./card-popular.component.scss'],
})
export class CardPopularComponent {
  @Input() movie: Movie | null = null;
  backgroundImageUrl: string = '';

  ngOnChanges() {
    this.updateBackgroundImage();
  }

  updateBackgroundImage() {
    if (this.movie) {
      this.backgroundImageUrl = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`;
    }
  }
}
