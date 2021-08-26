import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from 'src/app/Dto/login-dto';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUri: string;

  private headers = new HttpHeaders()
      .append("Control-Allow-Origin", "*");
  constructor(private http: HttpClient) {
    this.loginUri = environment.apiHost + 'login'
  }

  login(loginDto: LoginDto) {
    const httpParams = new HttpParams()
      .append("Email", loginDto.email).append("password", loginDto.password);

    return this.http.post<{token: string}>(this.loginUri, loginDto, { headers: this.headers,  params: httpParams } )
      .pipe(shareReplay())
      .subscribe((res: any) => {
        localStorage.setItem("access_token", res.token)
      });
  }
}
