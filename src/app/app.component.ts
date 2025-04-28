import { Component, inject, OnInit } from '@angular/core';
import { TodoStore } from './store/todos.store';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TodosListComponent, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  store = inject(TodoStore);

  ngOnInit(): void {
    this.loadTodos().then(() => {
      console.log('Todos loaded');
    });
  }

  async loadTodos() {
    await this.store.loadAll();
  }
}
