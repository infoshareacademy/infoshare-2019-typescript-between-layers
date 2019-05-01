import { Controller, Get, Post, Body } from '@nestjs/common';
import { Todo, Product } from '@trails/typings';

import { TodosService } from './todos.service';
import { ProductsService } from './products.service';

@Controller()
export class AppController {
  constructor(
    private readonly todosService: TodosService,
    private readonly productsService: ProductsService
  ) { }

  @Get('todos')
  async getTodo(): Promise<Todo[]> {
    return this.todosService.get();
  }

  @Post('todos')
  async addTodo(@Body() todo: Todo) {
    return this.todosService.add(todo);
  }

  @Get('products')
  async getProducts(): Promise<Product[]> {
    return this.productsService.get();
  }

  @Post('products')
  async addProduct(@Body() product: Product) {
    return this.productsService.add(product);
  }
}
