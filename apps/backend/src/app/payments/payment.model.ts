import { Record, Number, String, Undefined, Static } from 'runtypes';

export interface Payment {
  id: number;
  vendorId: number;
  clientId: number;
  currency?: string;
  amount: number;
}

export const PaymentRecord = Record({
  id: Number,
  vendorId: Number,
  clientId: Number,
  currency: String.Or(Undefined),
  amount: Number
});

export type PaymentSafe = Static<typeof PaymentRecord>;
