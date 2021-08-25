import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from 'src/app/Dto/login-dto';
import { JwtToken } from 'src/app/models/jwt-token';
import { shareReplay, map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders()
      .append("Control-Allow-Origin", "*");
  constructor(private http: HttpClient) {
  }

  // TODO: read URI from app.settings
  login(loginDto: LoginDto) {
    const loginUri = 'http://localhost:5000/login';
    
    const httpParams = new HttpParams()
      .append("Email", loginDto.email).append("password", loginDto.password);

    return this.http.post<{token: string}>(loginUri, loginDto, { headers: this.headers,  params: httpParams } )
      .pipe(shareReplay())
      .subscribe((res: any) => {
        localStorage.setItem("access_token", res.token)
      });
  }
}
