import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: string | null = null;

  private validUsers = [
    { username: 'Admin', password: '73188d55afc05b6389bdbea6a55a9f4b' },
    { username: 'Josue', password: 'ormaza' },
    { username: 'Steven', password: 'riofrio' },
    { username: 'Maria', password: 'b8e7be5dfa2ce0714d21dcfc7d72382c' }
  ];

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = this.validUsers.find(u => u.username === username && u.password === password);

    if (user) {
      this.isLoggedIn = true;
      this.currentUser = username;
      return true;
    } else {
      this.isLoggedIn = false;
      this.currentUser = null;
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getLoggedInUser(): string | null {
    return this.currentUser;
  }

  }
  /*import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: { username: string, role: string } | null = null;

  private validUsers = [
    { username: 'Admin', password: 'mica', role: 'admin' },
    { username: 'Josue', password: 'ormaza', role: 'admin' },
    { username: 'Steven', password: 'riofrio', role: 'admin' },
    { username: 'Maria', password: 'mary', role: 'admin' },
    { username: 'User1', password: 'password1', role: 'user' },
    { username: 'User2', password: 'password2', role: 'user' }
  ];

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = this.validUsers.find(u => u.username === username && u.password === password);

    if (user) {
      this.isLoggedIn = true;
      this.currentUser = { username: user.username, role: user.role };
      console.log('User logged in:', this.currentUser); // Para depuración
      return true;
    } else {
      this.isLoggedIn = false;
      this.currentUser = null;
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getLoggedInUser(): { username: string, role: string } | null {
    return this.currentUser;
  }

  getUserRole(): string | null {
    return this.currentUser?.role || null;
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  isUser(): boolean {
    return this.getUserRole() === 'user';
  }

  register(username: string, password: string, role: string = 'user'): boolean {
    const existingUser = this.validUsers.find(u => u.username === username);
    if (existingUser) {
      return false; // User already exists
    }
    this.validUsers.push({ username, password, role });
    return true; // Registration successful
  }
}*/



