import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Notification} from '../_model/Notification';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  private baseUrl = 'http://localhost:8080/socket/';

  constructor(private http: HttpClient) {
  }

  notifyOne(notification: Notification): Observable<any> {
    return this.http.post<Observable<any>>(this.baseUrl + 'notifyOne', notification, httpOptions);
  }

}
