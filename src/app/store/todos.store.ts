import { inject } from '@angular/core';
import { Todo } from '../model/todo.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { TodosService } from '../services/todos.service';

export type filter = 'all' | 'active' | 'completed';

type TodosState = {
  todos: Todo[];
  loading: boolean;
  filter: filter;
};

const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: 'all',
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, todosService = inject(TodosService)) => ({
    async loadAll() {
      patchState(store, { loading: true });
      const todos = await todosService.getTodos();
      patchState(store, { todos, loading: false });
    },
    async addTodo(title: string) {
      const todo = await todosService.addTodo({ title, completed: false });
      patchState(store, (state) => ({ todos: [...state.todos, todo] }));
    },
  }))
);
