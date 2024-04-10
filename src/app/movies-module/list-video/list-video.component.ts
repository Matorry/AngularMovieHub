import { Component, Input } from '@angular/core';
import { Video } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss'],
})
export class ListVideoComponent {
  @Input() videos!: Video[];
  loadedVideosCount = 0;
  videosPerLoad = 3;
  videosList: Video[] = [];
  selectedVideoKey!: string;
  isModalOpen = false;

  openVideoModal(videoKey: string) {
    this.selectedVideoKey = videoKey;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
