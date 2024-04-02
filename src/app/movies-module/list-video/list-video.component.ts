import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss'],
})
export class ListVideoComponent implements OnInit {
  @Input() videos!: Video[];
  loadedVideosCount = 0;
  videosPerLoad = 3;
  videosList: Video[] = [];
  selectedVideoKey!: string;
  isModalOpen = false;

  ngOnInit(): void {
    this.onVideosScroll();
  }

  onVideosScroll() {
    if (this.loadedVideosCount < this.videos.length) {
      const videosToLoad = Math.min(
        this.videosPerLoad,
        this.videos.length - this.loadedVideosCount
      );

      const newVideos = this.videos.slice(
        this.loadedVideosCount,
        this.loadedVideosCount + videosToLoad
      );

      this.loadedVideosCount += videosToLoad;

      this.videosList.push(...newVideos);
    }
  }

  openVideoModal(videoKey: string) {
    this.selectedVideoKey = videoKey;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
