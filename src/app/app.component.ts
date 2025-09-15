import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-us/about-us.component';
import { ConnectUsComponent } from './connect-us/connect-us.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { RotatingIconsComponent as ClientsComponent } from "./clients/clients.component";

@Component({
  selector: 'app-root',
  imports: [
    ToolbarComponent,
    MediaPlayerComponent,
    FooterComponent,
    AboutMeComponent,
    ConnectUsComponent,
    ServiceCategoryComponent,
    ClientsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mikado-media';
}
