import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authed = signal<boolean>(!!localStorage.getItem('token'));
  isAuthed(): boolean { return this._authed(); }

  // Call this after a successful login API call
  login(token: string) {
    localStorage.setItem('token', token);
    this._authed.set(true);
  }

  async logout() {
    // Optionally call your API to invalidate the session
    localStorage.removeItem('token');
    this._authed.set(false);
  }
}
