import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl ="http://localhost:9030/api/register"; // Assurez-vous d'utiliser la bonne URL
  private baseUrl = 'http://localhost:9090/user'; // Remplacez par l'URL de votre backend Spring Boot

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user`, user);
  }
  storeToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }
  login(username: string, password: string): Observable<any> {
    const authRequest = { username, password };
    return this.http.post(`${this.baseUrl}/login`, authRequest);
    //some modifications were made
   // return this.http.post(`${this.baseUrl}/user/login`, authRequest);?


  }
  forgotPassword(email: string): Observable<any> {

    const url = `${this.apiUrl}/forgot-password?email=${email}`;
    return this.http.post<string>(url, {});
    //const body = { email };
   // return this.http.post(`${this.apiUrl}/forgot-password`, body);
  }

  // Method to send a POST request for the reset-password endpoint
  resetPassword2(token: string, newPassword: string): Observable<any> {
    const body = { token, newPassword };
    return this.http.post(`${this.apiUrl}/reset-password?token=${token}`, body);
 
  }
  resetPassword(token: string, newPassword: string): Observable<any> {
    const requestBody = {
      token: token,
      newPassword: newPassword
    };

    return this.http.post(`${this.apiUrl}/reset-password?token=${token}&newPassword=${newPassword}`, requestBody);
  }

  
}



