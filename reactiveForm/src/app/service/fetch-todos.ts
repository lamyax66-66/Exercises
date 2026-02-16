import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Todos } from '../types/todos';


@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  
   private  http = inject(HttpClient);
   private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Failed to fetch todos'));
      })
    );
  }
}
