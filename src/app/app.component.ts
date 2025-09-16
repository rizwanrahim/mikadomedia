import { Component } from '@angular/core';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-us/about-us.component';
import { ConnectUsComponent } from './connect-us/connect-us.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { RotatingIconsComponent as ClientsComponent } from "./clients/clients.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  imports: [
    MediaPlayerComponent,
    FooterComponent,
    AboutMeComponent,
    ConnectUsComponent,
    ServiceCategoryComponent,
    ClientsComponent,
    MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mikado-media';

  scrollTo(sectionId: string) {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70; // toolbar height
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
