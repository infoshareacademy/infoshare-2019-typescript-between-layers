import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { TodosService } from './todos.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [TodosService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to backend!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({message: 'Welcome to backend!'});
    });
  });
});
