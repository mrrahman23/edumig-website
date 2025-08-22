import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesListComponent } from '../../common/courses-list-one/courses-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-courses',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CoursesListComponent],
  templateUrl: './home-courses.component.html',
  styleUrl: './home-courses.component.scss'
})
export class HomeCoursesComponent implements OnInit {
  public courses: any[]= [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>('assets/data/courses.json').subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Failed to load courses:', err);
      },
    });
  }
}
