import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/model/tmdb.detail.model';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent {
  @Input() episode!: Episode;
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
