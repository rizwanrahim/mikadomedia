import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safeUrl.pipe';

@Component({
  selector: 'work',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  reels = [
    { id: '-Yt8q3M2qSE', title: 'Video 1' },
    { id: 'BS5BrXQNEtE', title: 'Video 2' },
    { id: 'Gkysb_8N9os', title: 'Video 3' },
    { id: 'xdmdyRREy3Q', title: 'Video 4' },
    { id: '8KiYj1NrmiI', title: 'Video 5' },
    { id: 'zqpNT-OfD7E', title: 'Video 6' },
    { id: 'v3sl5XeoJo4', title: 'Video 7' }
  ];

  activeVideo: string | null = null;

  openVideo(videoId: string) {
    this.activeVideo = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  closeVideo() {
    this.activeVideo = null;
  }
}
