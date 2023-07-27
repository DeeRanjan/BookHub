import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountservicesService {

  constructor(private http:HttpClient) { }

  IGetUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7189/api/users/getAllUsers');
  }
  IAddUsers(data: any): Observable<any> {
    // Make a POST request to your API and return the Observable
    return this.http.post<any>('https://localhost:7189/api/users/CreateUser', data);
  }
  ILogin(data:any){
   return this.http.post<any>('https://localhost:7189/api/users/UserLogin',data);
  }
}
