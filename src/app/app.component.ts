import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, MediaPlayerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mikado-media';
}
