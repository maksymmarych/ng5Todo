import { Injectable } from '@angular/core';

import {Todo} from './todo';


@Injectable()
export class TodoDataService {

  private lastId: number = 0;
  private countTodo: number = 0;
  private todos: Todo[] = [];

  constructor() { }

  updateCountTodo(): TodoDataService {
    this.countTodo = 0;
    for (let todo of this.todos) {
      console.log(todo.complete);
      if (todo.complete){
        this.countTodo = ++ this.countTodo;
      }
    }
    return this;
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }


  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateCountTodo();
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  countCompleteTodo(): number {
    return this.countTodo;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo): Todo {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    this.updateCountTodo();
    return updatedTodo;
  }


}
