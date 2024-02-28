import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isMovies: boolean;
  stateIsMovies!: boolean;
  constructor(private state: StateService) {
    this.isMovies = true;
    this.state.getIsMoviesSelect().subscribe({
      next: (data) => (this.stateIsMovies = data),
    });
  }
  setMode(isMovies: boolean) {
    this.state.setIsMoviesSelect(isMovies);
  }
}
