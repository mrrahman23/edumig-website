import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppLogoComponent } from '../../../core/applogo/applogo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppLogoComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading = false;
  error: string | null = null;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  async onSubmit() {
    this.error = null;
    if (this.form.invalid) return;

    this.loading = true;
    const { email, password } = this.form.value;

    try {
      // TODO: replace with your API call
      // Example:
      // await this.auth.login(email!, password!).toPromise();

      // Demo-only: accept the test creds from the design
      if (email === 'elearnatest@gmail.com' && password === 'Elearna1234') {
        await this.router.navigateByUrl('/');
      } else {
        throw new Error('Invalid email or password. Please try again.');
      }
    } catch (err: any) {
      this.error = err?.message || 'We’re having trouble logging you in. Please try again.';
    } finally {
      this.loading = false;
    }
  }
}
