import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() isMovies: EventEmitter<boolean>;
  @Input() stateIsMovies!: boolean;

  constructor() {
    this.isMovies = new EventEmitter();
  }

  handleChangeMode() {
    this.isMovies.emit(!this.stateIsMovies);
  }
}
