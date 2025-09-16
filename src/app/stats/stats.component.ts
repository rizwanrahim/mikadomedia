import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'stats',
  imports: [NgFor],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Happy Clients', value: '100+' },
    { label: 'Projects Completed', value: '300+' },
    { label: 'Team Members', value: '10+' }
  ];
}
