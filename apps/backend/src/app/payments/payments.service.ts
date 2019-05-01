import { Injectable, Inject, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { EXTERNAL_SERVICE_URL_TOKEN } from '../../environments/tokens';
import { Payment } from './payment.model';

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
}
