import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  constructor(private http: HttpClient) { }

  getData = () => this.http.get<string[]>('webapi');
}
