import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { RotatingButtonComponent } from '../rotating-button/rotating-button.component';

@Component({
  selector: 'media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
  imports: [RotatingButtonComponent],
})
export class MediaPlayerComponent implements AfterViewInit {
  @Input() mediaSrc: string = '';
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.videoPlayer.nativeElement;
    video.muted = true;
    video.play().catch((err) => console.warn('Autoplay failed:', err));
  }

  toggleMute(): void {
    const video = this.videoPlayer.nativeElement;
    video.muted = !video.muted;
  }

  onError(event: any) {
    console.error('Media error:', event);
  }
}
