import { Component, Input } from '@angular/core';
import { Movie, Tv } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
})
export class MovieCardCarousel {
  @Input() movie: Movie | Tv | null = null;
  backgroundImageUrl: string = '';

  isMovie(item: Movie | Tv): item is Movie {
    return (item as Movie).title !== undefined;
  }

  isTvShow(item: Movie | Tv): item is Tv {
    return (item as Tv).original_name !== undefined;
  }

  ngOnChanges() {
    this.updateBackgroundImage();
  }

  updateBackgroundImage() {
    if (this.movie) {
      this.backgroundImageUrl = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`;
    }
  }
}
