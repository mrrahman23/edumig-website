import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoursesListComponent } from '../../../features/common/courses-list-one/courses-list.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-course-one',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CoursesListComponent, RouterLink],
  templateUrl: './course-one.component.html',
  styleUrls: ['./course-one.component.scss'],
})
export class CourseOneComponent implements OnInit, AfterViewInit {
  public courses: any[]= [];
  public categories: any[]= [];
  constructor(private ngZone: NgZone, private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>('assets/data/courses.json').subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Failed to load courses:', err);
      },
    });
    this.http.get<any[]>('assets/data/categories.json').subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Failed to load categories:', err);
      },
    });
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
