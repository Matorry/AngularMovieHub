import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss'],
})
export class CardVideoComponent {
  @Input() video!: Video;
  @Output() openModal = new EventEmitter<string>();

  onOpenModal(videoKey: string) {
    this.openModal.emit(videoKey);
  }
}
