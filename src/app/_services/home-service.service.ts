import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Home } from '../_models/Home';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class HomeService {

  private homeDataUrl = 'api/allHomeData';

  constructor(private http: HttpClient) {

   }

   getHomeData(): Observable<Home[]> {
    return this.http.get<Home[]>(this.homeDataUrl);
   };

}
