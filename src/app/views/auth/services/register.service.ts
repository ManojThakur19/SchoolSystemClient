import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {map} from 'rxjs/operators';
import { UrlHelper } from '../../../core/url-helper';

const register = 'api/user/registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BehaviorSubject<any[]>{

  // requestOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer ' + localStorage.getItem('userToken')
  //   })
  // };
  constructor(private http: HttpClient) { 
    super([]);
  }

// register(user: User): Observable<any> {
//     const httpHeaders = new HttpHeaders();
//     httpHeaders.set('Content-Type', 'application/json');
//     return this.http.post<User>(API_USERS_URL, user, { headers: httpHeaders })
//         .pipe(
//             map((res: User) => {
//                 return res;
//             }),
//             catchError(err => {
//                 return null;
//             })
//         );
// }


register(data: any) : Observable<any> {
  const httpHeaders = new HttpHeaders();
  httpHeaders.set('Content-Type', 'application/json');

  return this.http.post<string>(`${UrlHelper.backEndUrl}/api/user/registration`, data , {headers : httpHeaders})
    .pipe(map(res => res as any));
}
}