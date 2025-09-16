import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rotating-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rotating-button.component.html',
  styleUrls: ['./rotating-button.component.css']
})
export class RotatingButtonComponent implements OnInit {
  services = [
    'Corporate AVs',
    '3D Animation Videos & AD',
    'Fiction Videos',
    'Award Shows',
    'TV Promos',
    'Educational Videos',
    'Infographics',
    'Social Content'
  ];

  currentIndex = 0;
  currentService = this.services[0];

  ngOnInit(): void {
    setInterval(() => {
      const serviceEl = document.querySelector('.service') as HTMLElement;

      // Animate out (move up)
      serviceEl.style.transform = 'translateY(-100%)';
      serviceEl.style.opacity = '0';

      setTimeout(() => {
        // Update text
        this.currentIndex = (this.currentIndex + 1) % this.services.length;
        this.currentService = this.services[this.currentIndex];

        // Animate in (from bottom)
        serviceEl.style.transform = 'translateY(100%)';
        serviceEl.style.opacity = '0';

        setTimeout(() => {
          serviceEl.style.transform = 'translateY(0)';
          serviceEl.style.opacity = '1';
        }, 50);
      }, 600); // match transition
    }, 1600); // 1s visible + 0.6s flip
  }
}
