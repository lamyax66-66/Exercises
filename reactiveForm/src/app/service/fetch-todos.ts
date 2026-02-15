import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { todos } from '../types/todos';


@Injectable({
  providedIn: 'root',
})
export class FetchTodos {
  
   private  http = inject(HttpClient);
   private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(): Observable<todos[]> {
    return this.http.get<todos[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Failed to fetch todos'));
      })
    );
  }
}
