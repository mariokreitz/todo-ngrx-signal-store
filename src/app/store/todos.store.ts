import { Todo } from '../model/todo.model';
import { signalStore, withState } from '@ngrx/signals';

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
  withState(initialState)
);
