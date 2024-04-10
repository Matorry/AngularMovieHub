import { Component, Input } from '@angular/core';
import {
  CastMovieMember,
  CrewMovieMember,
} from 'src/app/model/tmdb.crew.model';
import { GuestStars } from 'src/app/model/tmdb.detail.model';

@Component({
  selector: 'app-people-card',
  templateUrl: './people.card.component.html',
  styleUrls: ['./people.card.component.scss'],
})
export class PeopleCardComponent {
  @Input() person: CastMovieMember | CrewMovieMember | GuestStars | null = null;

  isCastMember(
    person: CastMovieMember | CrewMovieMember | GuestStars
  ): person is CastMovieMember {
    return (person as CastMovieMember).character !== undefined;
  }

  isCrewMember(
    person: CastMovieMember | CrewMovieMember | GuestStars
  ): person is CrewMovieMember {
    return (person as CrewMovieMember).job !== undefined;
  }

  getImageUrl(imgPath: string | null, w: number): string {
    const baseUrl = `https://image.tmdb.org/t/p/w${w}/`;
    return imgPath ? baseUrl + imgPath : '';
  }

  onImageError(event: any) {
    event.target.src = '../../../assets/person.webp';
  }
}
