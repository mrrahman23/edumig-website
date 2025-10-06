import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { BranchingData, BranchingHeroComponent } from '../../features/switch/branching-hero/branching-hero.component';

@Component({
  selector: 'app-switching-page',
  standalone: true,
  imports: [CommonModule, BranchingHeroComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './switching.component.html',
  styleUrls: ['./switching.component.scss']
})
export class SwitchingComponent {
  // Two-tile dataset
  pageData: BranchingData = {
    kicker: 'Choose your destination',
    title: 'Pick a site to explore',
    lead: 'Two demos — go right where you need.',
    layout: { desktopSpan: [6, 6] },
    branches: [
      {
        id: 'site-a',
        label: 'Edumig Limited',
        subtitle: 'A LEADING STUDENT VISA CONSULTANCY FIRM IN BANGLADESH',
        href: 'https://edumig.com',
        accent: '#22c55e',
        tag: 'Edumig',
        image: 'https://app.theurbangaragebd.com/edumig/images/background/edumig_switch.png?q=80&w=1400&auto=format&fit=crop',
        // image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
        logo: '/assets/brand/demo-a-logo.svg'
      },
      {
        id: 'site-b',
        label: 'English Learning Platform',
        subtitle: 'DIGITAL & BLENDED ENGLISH LANGUAGE LEARNING PLATFORM',
        href: '/elp',
        accent: '#06b6d4',
        tag: 'ELP',
        image: 'https://app.theurbangaragebd.com/edumig/images/background/elp_switch.png?q=80&w=1400&auto=format&fit=crop',
        // image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
        logo: '/assets/brand/demo-b-logo.svg'
      }
    ]
  };

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Edumig — Choose your destination');
    this.meta.updateTag({ name: 'description', content: 'Two demos — go right where you need.' });
  }
}
