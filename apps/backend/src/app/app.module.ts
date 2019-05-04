import { Module, HttpModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { TodosService } from './todos.service';
import { environment } from '../environments/environment';
import { EXTERNAL_SERVICE_URL_TOKEN } from '../environments/tokens';
import { ProductsService } from './products.service';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';
import { PaymentsTypeSafeController } from './payments-typesafe/payments-typesafe.controller';
import { PaymentsTypeSafeService } from './payments-typesafe/payments-typesafe.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PaymentsController, PaymentsTypeSafeController],
  providers: [TodosService, ProductsService, PaymentsService, PaymentsTypeSafeService, {
    provide: EXTERNAL_SERVICE_URL_TOKEN,
    useValue: environment.externalServiceUrl
  }]
})
export class AppModule { }
