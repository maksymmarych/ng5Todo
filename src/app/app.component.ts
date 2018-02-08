import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

import {Todo} from "./todo";
import {TodoDataService} from "./todo-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TodoDataService ]
})

export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService){

  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  get countCompleteTodo() {
    return this.todoDataService.countCompleteTodo();
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }


}
