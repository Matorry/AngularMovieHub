import { Component, Input } from '@angular/core';
import { CastMember, CrewMember } from 'src/app/model/tmdb.crew.model';

@Component({
  selector: 'app-people-card',
  templateUrl: './people.card.component.html',
  styleUrls: ['./people.card.component.scss'],
})
export class PeopleCardComponent {
  @Input() person: CastMember | CrewMember | null = null;

  isCastMember(person: CastMember | CrewMember): person is CastMember {
    return (person as CastMember).character !== undefined;
  }

  isCrewMember(person: CastMember | CrewMember): person is CrewMember {
    return (person as CrewMember).job !== undefined;
  }

  getImageUrl(imgPath: string | null, w: number): string {
    const baseUrl = `https://image.tmdb.org/t/p/w${w}/`;
    return imgPath ? baseUrl + imgPath : '';
  }

  onImageError(event: any) {
    event.target.src = '../../../assets/person.webp';
  }
}
