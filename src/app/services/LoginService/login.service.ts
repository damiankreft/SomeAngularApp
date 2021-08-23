import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/app/Dto/login-dto';
import { JwtToken } from 'src/app/models/jwt-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders()
      .append("Control-Allow-Origin", "*");
  constructor(private http: HttpClient) {
  }

  // TODO: read URI from app.settings
  login(email: string, password: string): Observable<JwtToken> {
    const loginUri = 'http://localhost:5000/login';
    
    const httpParams = new HttpParams()
      .append("Email", email).append("password", password);

    const loginDto: LoginDto = { 
      Email: email,
      Password: password
    };

    return this.http.post<JwtToken>(loginUri, loginDto, { headers: this.headers,  params: httpParams } );
  }
}
