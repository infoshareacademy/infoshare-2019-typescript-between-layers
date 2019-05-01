import { Module, HttpModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { TodosService } from './todos.service';
import { environment } from '../environments/environment';
import { EXTERNAL_SERVICE_URL_TOKEN } from '../environments/tokens';
import { ProductsService } from './products.service';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PaymentsController],
  providers: [TodosService, ProductsService, PaymentsService, {
    provide: EXTERNAL_SERVICE_URL_TOKEN,
    useValue: environment.externalServiceUrl
  }]
})
export class AppModule { }
