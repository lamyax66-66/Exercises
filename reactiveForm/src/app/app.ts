import { Component, signal } from '@angular/core';
import { TodoList } from "./Exer6/todo-list/todo-list";

@Component({
  selector: 'app-root',
  imports: [TodoList],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactiveForm');
}
 