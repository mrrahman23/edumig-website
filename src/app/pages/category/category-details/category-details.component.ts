import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoursesListTwoComponent } from '../../../features/common/courses-list-two/courses-list-two.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CoursesListTwoComponent,RouterLink],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent implements OnInit, AfterViewInit {
  public courses: any[] = [];
  public filteredCourses: any[] = [];
  public currentSlug = '';

  constructor(
    private ngZone: NgZone,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    
    // 1) Watch the slug
    this.route.paramMap.subscribe(params => {
      this.currentSlug = (params.get('slug') || '').toLowerCase();
      this.applyFilter();
    });

    // 2) Load data once
    this.http.get<any[]>('assets/data/courses.json').subscribe({
      next: (data) => {
        this.courses = data || [];
        this.applyFilter();
      },
      error: (err) => {
        console.error('Failed to load courses:', err);
        this.courses = [];
        this.filteredCourses = [];
      },
    });
  }

  private applyFilter() {
    if (!this.courses?.length) { this.filteredCourses = []; return; }
    if (!this.currentSlug || this.currentSlug === 'all') {
      this.filteredCourses = [...this.courses];
      return;
    }else {
      this.filteredCourses = this.courses.filter(c => {
        const catSlug = this.slugify(c.category || '');
        const match = catSlug === this.currentSlug;
        return match; // ⬅️ important
      });
    }
  
  }

  private slugify(v: string): string {
    return String(v || '')
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
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
        document.addEventListener('DOMContentLoaded', reinit, { once: true });
      } else {
        setTimeout(reinit);
      }
    });
  }
}
