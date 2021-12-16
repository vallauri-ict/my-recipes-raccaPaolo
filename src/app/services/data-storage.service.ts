import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  REST_API_SERVER = environment.REST_API_SERVER;

  constructor(private httpClient: HttpClient) {}

  public getRequest = (endpoint: string) => {
    return this.httpClient.get(this.REST_API_SERVER + endpoint);
  };
}
