import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(){

    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Felipe Donoso');

    
    return this.http.get('https://reqres.in/api/users', {params})
            .pipe(
              map(res => res['data'])
              );
  }  
}
