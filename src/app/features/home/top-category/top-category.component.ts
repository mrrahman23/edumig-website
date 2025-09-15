import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-top-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-category.component.html',
  styleUrl: './top-category.component.scss'
})
export class TopCategoryComponent implements OnInit {
  public categories: any[]= [];
  // @Input() input_categories?: any[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // if(this.input_categories?.length && this.input_categories.length > 0) {
    //   this.categories = this.input_categories;
    //   return;
    // } else {
      this.http.get<any[]>('assets/data/categories.json').subscribe({
        next: (data) => {
          this.categories = data;
        },
        error: (err) => {
          console.error('Failed to load categories:', err);
        },
      });
    }
  // }
}
