import { Component, inject, OnInit } from '@angular/core';
import { TodoStore } from './store/todos.store';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  store = inject(TodoStore);

  ngOnInit(): void {
    this.store.todos();
  }
}
