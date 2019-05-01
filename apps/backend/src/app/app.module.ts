import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TodosService } from './todos.service';
import { ProductsService } from './products.service';

@Module({
  controllers: [AppController],
  providers: [TodosService, ProductsService]
})
export class AppModule { }
