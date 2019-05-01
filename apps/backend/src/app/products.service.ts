import { Injectable } from "@nestjs/common";
import { Product } from '@trails/typings';

const INITIAL_PRODUCTS: Product[] = [
  { id: 1, name: 'Brown bag' }, { id: 2, name: 'Book' }
];

@Injectable()
export class ProductsService {
  private products: Product[] = INITIAL_PRODUCTS;

  async get(): Promise<Product[]> {
    return this.products;
  }

  async add(product: Product): Promise<void> {
    this.products.push({
      ...product,
      id: Date.now()
    });
  }
}
