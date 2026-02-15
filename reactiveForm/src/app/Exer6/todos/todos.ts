import { Component, inject } from '@angular/core';
import { FetchTodos } from '../../service/fetch-todos';
import { catchError, Observable, of } from 'rxjs';
import { todos } from '../../types/todos';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [AsyncPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {

  readonly todoService = inject(FetchTodos);
   
  errorMessage = '';

  todosList$: Observable<todos[]> = this.todoService.getTodos().pipe(
    catchError(err => {
      this.errorMessage = err.message;
      return of([]);
    })
  );
}
