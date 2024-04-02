import { Component, Input } from '@angular/core';
import { CastMember, CrewMember } from 'src/app/model/tmdb.crew.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people.list.component.html',
  styleUrls: ['./people.list.component.scss'],
})
export class PeopleListComponent {
  @Input() people: (CastMember | CrewMember)[] = [];
  @Input() title: string = '';
}
