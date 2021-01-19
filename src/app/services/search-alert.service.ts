import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchAlertService {

  constructor(private httpClient: HttpClient) { }

  httpOptionsWithParams = {
    params: {}
  };

  getAlertsByServerName(serverName: string, pageNumber: number, ordersPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('name', serverName);
    params = params.append('page', pageNumber.toString());
    params = params.append('size', ordersPerPage.toString());
    this.httpOptionsWithParams.params = params;
    return this.httpClient
      .get(environment.SEARCH_ALERTS_BY_SERVER_NAME, this.httpOptionsWithParams);
  }

  getAlertsByDescriptionAlert(serverName: string, pageNumber: number, ordersPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('description', serverName);
    params = params.append('page', pageNumber.toString());
    params = params.append('size', ordersPerPage.toString());
    this.httpOptionsWithParams.params = params;
    return this.httpClient
      .get(environment.SEARCH_ALERTS_BY_DESCRIPTION_ALERT, this.httpOptionsWithParams);
  }
}
