import { Injectable } from '@nestjs/common';
import { Todo } from '@trails/typings';

const INITIAL_TODOS: Todo[] = [
  { id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }
]

@Injectable()
export class TodosService {
  private todos: Todo[] = INITIAL_TODOS;

  async get(): Promise<Todo[]> {
    return this.todos;
  }

  async add(todo: Todo): Promise<void> {
    this.todos.push({
      ...todo,
      id: Date.now()
    });
  }
}
