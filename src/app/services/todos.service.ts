import { Injectable } from '@angular/core';
import { TODOS } from '../model/mock-data';
import { Todo } from '../model/todo.model';

@Injectable({ providedIn: 'root' })
export class TodosService {
  async getTodos() {
    sleep(1000);
    return TODOS;
  }

  async addTodo(todo: Partial<Todo>): Promise<Todo> {
    sleep(1000);
    return { id: Math.random().toString(36).substring(2, 9), ...todo } as Todo;
  }
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
