export interface Payment {
  id: number;
  vendorId: number;
  clientId: number;
  currency: string;
  amount: number;
}
