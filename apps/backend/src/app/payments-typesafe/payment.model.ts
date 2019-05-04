import { Record, Number, String, Undefined, Static } from 'runtypes';

export const PaymentRecord = Record({
  id: Number,
  vendorId: Number,
  clientId: Number,
  currency: String.Or(Undefined),
  amount: Number
});

export type Payment = Static<typeof PaymentRecord>;
