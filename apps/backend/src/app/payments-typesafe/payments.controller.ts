import { Controller, Get } from '@nestjs/common';
import { Payment } from './payment.model';
import { PaymentsTypeSafeService } from './payments-typesafe.service';

@Controller('payments/type-safe')
export class PaymentsTypeSafeController {
  constructor(private paymentsService: PaymentsTypeSafeService) {
  }

  @Get()
  async get(): Promise<Payment[]> {
    try {
      return this.paymentsService.get();
    } catch (ex) {
      console.error(ex);
    }
  }
}
