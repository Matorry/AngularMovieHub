import { Component, Input } from '@angular/core';
import { Movie, Tv } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() movies: (Movie | Tv)[] = [];
  @Input() title: string = '';
}
