import { Injectable } from '@nestjs/common';
import { Todo } from '@trails/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      id: Date.now(),
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
}
