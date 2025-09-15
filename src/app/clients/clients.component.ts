import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';

@Component({
  selector: 'clients',
  imports: [NgFor, NgClass, NgxFastMarqueeModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class RotatingIconsComponent {
  icons = [
    'hungama.png',
    'artist.png',
    'discovery.png',
    'publicise.png',
    'group.png',
    'zee.png',
  ];
}
