import {OrderDetail} from './order-detail';
import {Category} from './category';
import {Supplier} from './supplier';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  orderDetail?: OrderDetail;
  category?: string;
  supplier?: string;
  quantity?: number;
  nameCategory?: string;
  nameSupplier?: string;
}
