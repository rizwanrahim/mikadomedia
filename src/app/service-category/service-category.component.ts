import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'service-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css']
})
export class ServiceCategoryComponent {
  services = [
    {
      icon: 'fas fa-city icon-corporate',
      title: 'Corporate AVs',
      desc: 'Professional audio-visuals for corporate branding and communication.'
    },
    {
      icon: 'fas fa-vr-cardboard icon-3d',
      title: '3D Animation Videos & AD',
      desc: 'High-quality 3D animation for advertisements and presentations.'
    },
    {
      icon: 'fas fa-theater-masks icon-fiction',
      title: 'Fiction Videos',
      desc: 'Creative storytelling through engaging fiction video content.'
    },
    {
      icon: 'fas fa-medal icon-award',
      title: 'Award Shows',
      desc: 'Complete video solutions for award shows and ceremonies.'
    },
    {
      icon: 'fas fa-clapperboard icon-tv',
      title: 'TV Promos',
      desc: 'Attention-grabbing promotional content for TV shows and events.'
    },
    {
      icon: 'fas fa-book-open icon-edu',
      title: 'Educational Videos',
      desc: 'Informative and interactive videos for learning and training.'
    },
    {
      icon: 'fas fa-chart-line icon-info',
      title: 'Infographics',
      desc: 'Visually engaging infographic videos for data and storytelling.'
    },
    {
      icon: 'fas fa-hashtag icon-social',
      title: 'Social Media - Content (Promotions)',
      desc: 'Dynamic promotional content optimized for social media platforms.'
    }
  ];

}
