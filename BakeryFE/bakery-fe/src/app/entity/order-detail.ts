import {Oder} from './oder';
import {Product} from './product';

export interface OrderDetail {
  id?: number;
  quantity?: number;
  oder?: Oder;
  product?: Product;
}
