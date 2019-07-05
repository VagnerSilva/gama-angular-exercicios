import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Linguagem } from './models/linguagem';


@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  constructor(private http: HttpClient) { }

  getLinguagem(): Observable<Linguagem[]> {
    return this.http.get<Linguagem[]>('http://localhost:3000/languages');
  }

  postLinguagem(data: Linguagem): Observable<any> {
    return this.http.post('http://localhost:3000/languages', data);
  }
}
