import { Injectable, Inject, HttpService } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';
import { EXTERNAL_SERVICE_URL_TOKEN } from '../../environments/tokens';
import { Payment, PaymentRecord } from './payment.model';

@Injectable()
export class PaymentsTypeSafeService {
  constructor(@Inject(EXTERNAL_SERVICE_URL_TOKEN) private externalServiceUrl: string,
    private httpService: HttpService) {
  }

  async get(): Promise<Payment[]> {
    return this.httpService
      .get<Payment[]>(`${this.externalServiceUrl}/payments`)
      .pipe(
        map(response => response.data),
        tap(payment => PaymentRecord.check(payment))
      )
      .toPromise();
  }
}
