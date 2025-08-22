import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-courses-two-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './courses-list-two.component.html',
  styleUrl: './courses-list-two.component.scss'
})
export class CoursesListTwoComponent implements OnInit {
  public courses: any[]= [];
  @Input({ required: true }) input_courses?: any[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log(this.input_courses?.length, 'courses-list-two');
    if(this.input_courses?.length && this.input_courses.length > 0) {
      
      this.courses = this.input_courses;
      return;
    }
    // } else {
    //   this.http.get<any[]>('assets/data/courses.json').subscribe({
    //     next: (data) => {
    //       this.courses = data;
    //     },
    //     error: (err) => {
    //       console.error('Failed to load courses:', err);
    //     },
    //   });
    // }
  }
}
