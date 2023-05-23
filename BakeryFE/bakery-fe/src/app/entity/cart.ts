import {Account} from './account';
import {Product} from './product';

export interface Cart {
  size: string;
  id?: number;
  quantity?: number;
  account?: Account;
  product?: Product;
}
