import { Component, Input } from '@angular/core';
import {
  CastMovieMember,
  CrewMovieMember,
} from 'src/app/model/tmdb.crew.model';
import { GuestStars } from 'src/app/model/tmdb.detail.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people.list.component.html',
  styleUrls: ['./people.list.component.scss'],
})
export class PeopleListComponent {
  @Input() people: (CastMovieMember | CrewMovieMember | GuestStars)[] = [];
  @Input() title: string = '';
}
