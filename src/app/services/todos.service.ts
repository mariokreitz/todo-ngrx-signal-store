import { Injectable } from '@angular/core';
import { TODOS } from '../model/mock-data';

@Injectable({ providedIn: 'root' })
export class TodosService {
  async getTodos() {
    sleep(1000);
    return TODOS;
  }
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
