import { AfterViewInit, Component, NgZone } from '@angular/core';
import { HeroComponent } from '../../features/home/hero/hero.component';
import { ClientsMarqueeComponent } from '../../features/home/clients-marquee/clients-marquee.component';
import { TopCategoryComponent } from '../../features/home/top-category/top-category.component';
import { QuickStartComponent } from '../../features/home/quick-start/quick-start.component';
import { HomeCoursesComponent } from '../../features/home/home-courses/home-courses.component';
import { OfferComponent } from '../../features/home/offer/offer.component';
import { TestimonialComponent } from '../../features/home/testimonial/testimonial.component';
import { TrendingCoursesComponent } from '../../features/home/trending-courses/trending-courses.component';

@Component({
  selector: 'app-home-one',
  standalone: true,
  imports: [
    HeroComponent,
    ClientsMarqueeComponent,
    TopCategoryComponent,
    QuickStartComponent,
    HomeCoursesComponent,
    OfferComponent,
    TestimonialComponent,
    TrendingCoursesComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-clients-marquee></app-clients-marquee>
    <app-top-category></app-top-category>
    <app-quick-start></app-quick-start>
    <app-home-courses></app-home-courses>
    <app-offer></app-offer>
    <app-testimonial></app-testimonial>
    <app-trending-courses></app-trending-courses>
  `,
})

export class HomeOneComponent implements AfterViewInit {
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const reinit = () => {
        try {
          const wf = (window as any).Webflow;
          if (!wf) return;

          // Clean up previous interactions (useful on route changes too)
          if (wf.destroy) wf.destroy();

          // Re-run DOMready handlers and interactions
          if (wf.ready) wf.ready();

          if (wf.require) {
            const ix2 = wf.require('ix2');
            if (ix2 && ix2.init) ix2.init();
          }
        } catch (err) {
          console.warn('Webflow reinit failed:', err);
        }
      };

      // Run once the DOM is ready
      if (document.readyState === 'loading') {
        console.log('Document is still loading, waiting for DOMContentLoaded...');
        
        document.addEventListener('DOMContentLoaded', reinit, { once: true });
      } else {
        console.log('Document is already loaded, running reinit immediately...');
        setTimeout(reinit);
      }
    });
  }
}
