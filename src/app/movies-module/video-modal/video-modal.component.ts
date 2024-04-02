import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
})
export class VideoModalComponent {
  @Input() videoKey!: string;
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(videoKey: string): SafeResourceUrl {
    const videoUrl = `https://www.youtube.com/embed/${videoKey}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
