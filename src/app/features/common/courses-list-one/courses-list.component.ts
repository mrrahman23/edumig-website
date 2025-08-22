import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {
  public courses: any[]= [];
  @Input() input_courses?: any[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    if(this.input_courses?.length && this.input_courses.length > 0) {
      this.courses = this.input_courses;
      return;
    } else {
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
}
