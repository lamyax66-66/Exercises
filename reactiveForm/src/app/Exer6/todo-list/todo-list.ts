import { Component, inject } from '@angular/core';
import { ToDoService } from '../../service/fetch-todos';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Todos } from '../../types/todos';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [AsyncPipe],
  templateUrl: './todo-list.html',
})
export class TodoList  {

  readonly todoService = inject(ToDoService);
   
  errorMessage: string = '';

  todosList$: Observable<Todos[]> = this.todoService.getTodos().pipe(
    // to manipulate data
    map((todoList: Todos[])=> 
     todoList.map((element: Todos)=> {
      return {...element, completed: element.completed? 'completed': 'pending'}
    })
    ),
    catchError(err => {
      this.errorMessage = err.message;
      return EMPTY;
    })
  );
}
