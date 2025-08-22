import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeOneComponent } from './pages/home-one/home-one.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { CourseOneComponent } from './pages/courses/course-one/course-one.component';
import { AboutUsOneComponent } from './pages/about-us/about-us-one/about-us-one.component';
import { ContactUsTwoComponent } from './pages/contact-us/contact-us-two/contact-us-two.component';

export const routes: Routes = [
  // Public standalone login page (no global navbar/footer)
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeOneComponent },
      { path: 'courses', component: CourseOneComponent },
      { path: 'about-us', component: AboutUsOneComponent },
      { path: 'contact-us', component: ContactUsTwoComponent },
      // { path: 'category/:{slug}', component: CategoryDetailsComponent },
      { path: 'courses/category/:slug', loadComponent: () => import('./pages/category/category-details/category-details.component').then(m => m.CategoryDetailsComponent) },
      { path: 'courses/details/:slug', loadComponent: () => import('./pages/courses/courses-details/courses-details.component').then(m => m.CoursesDetailsComponent) },
    ],
  },
  { path: '**', redirectTo: '' },
];
