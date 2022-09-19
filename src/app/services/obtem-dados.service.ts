import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ObtemDadosService {
  imagensAleatorias: Object = {}

  constructor(private http: HttpClient) { }

  obtemImagensAleatorias(): Observable<Object>{
    return this.imagensAleatorias = this.http.get('https://api.thecatapi.com/v1/images/search?limit=8');

  }
}
