import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http: HttpClient) { 

  }

  getData(userId:any):Observable<any>{
   

    let headers= new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')

    return this._http.post('https://www.tcsgo.com/api/home/webapi/SV',userId, {headers:headers})
  }
}
