import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

export interface AuthEntity {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  fakeLogin(email: string, password: string): Observable<AuthEntity> {
    const params = new HttpParams()
      .set('user', email)
      .set('password', password);

    return this.http.post<AuthEntity>(`${environment.baseUrl}/login`, {
      params,
    });
  }
}
