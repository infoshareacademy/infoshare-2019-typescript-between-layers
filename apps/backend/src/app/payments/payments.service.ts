import { Injectable, Inject, HttpService } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';
import { EXTERNAL_SERVICE_URL_TOKEN } from '../../environments/tokens';
import { Payment, PaymentSafe, PaymentRecord } from './payment.model';

@Injectable()
export class PaymentsService {
  constructor(@Inject(EXTERNAL_SERVICE_URL_TOKEN) private externalServiceUrl: string,
    private httpService: HttpService) {
  }

  async get(): Promise<Payment[]> {
    return this.httpService
      .get<Payment[]>(`${this.externalServiceUrl}/payments`)
      .pipe(
        map(response => response.data)
      )
      .toPromise();
  }

  async getTypeSafe(): Promise<PaymentSafe[]> {
    return this.httpService
      .get<PaymentSafe[]>(`${this.externalServiceUrl}/payments`)
      .pipe(
        map(response => response.data),
        tap(payment => PaymentRecord.check(payment))
      )
      .toPromise();
  }
}
