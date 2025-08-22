import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppLogoComponent } from '../../../core/applogo/applogo.component';
// import { AuthService } from '../../../shared/auth.service'; // if you want to auto-login after signup

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppLogoComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  loading = false;
  error: string | null = null;
  success = false;
  verificationRequired = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    acceptPrivacy: [false, [Validators.requiredTrue]],
    acceptMarketing: [false, [Validators.requiredTrue]], // set to required to match your design
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private auth: AuthService
  ) {}

  async onSubmit() {
    this.error = null;
    if (this.form.invalid) return;
    this.loading = true;

    try {
      const value = this.form.value;

      // TODO: Replace with your real API call:
      // await this.http.post('/api/auth/signup', value).toPromise();

      // If your backend requires email verification, use this:
      // this.verificationRequired = true;

      // Otherwise show success and redirect:
      this.success = true;
      setTimeout(() => this.router.navigateByUrl('/'), 1500);

      // Or auto-login after successful signup:
      // this.auth.login('<token-from-server>');
      // this.router.navigateByUrl('/');

    } catch (e: any) {
      this.error = e?.message || 'There was an error signing you up. Please try again.';
    } finally {
      this.loading = false;
    }
  }
}
