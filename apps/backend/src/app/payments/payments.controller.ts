import { Controller, Get } from '@nestjs/common';
import { Payment, PaymentSafe } from './payment.model';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {
  }

  @Get()
  async get(): Promise<Payment[]> {
    return this.paymentsService.get();
  }

  @Get('type-safe')
  async getTypeSafe(): Promise<PaymentSafe[]> {
    try {
      return this.paymentsService.getTypeSafe();
    } catch (ex) {
      console.error(ex);
    }
  }
}
