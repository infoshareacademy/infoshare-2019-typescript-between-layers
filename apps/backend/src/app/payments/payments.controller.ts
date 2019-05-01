import { Controller, Get } from '@nestjs/common';
import { Payment } from './payment.model';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {
  }

  @Get()
  async get(): Promise<Payment[]> {
    return this.paymentsService.get();
  }
}
