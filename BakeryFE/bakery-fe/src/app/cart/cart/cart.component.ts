import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {TokenService} from "../../service/token.service";
import {ShareService} from "../../service/share.service";
import {OrderService} from "../../service/order.service";
import {Product} from "../../entity/product";
import {Cart} from "../../entity/cart";
import Swal from "sweetalert2";
import {render} from "creditcardpayments/creditCardPayments";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  idAccount: any;
  cartDto: Cart[] = [];
  quantity = 0;
  total = 0;
  item: any;
  isPaypal: boolean = false;

  constructor(private cartService: CartService,
              private tokenService: TokenService,
              private shareService: ShareService,
              private orderService: OrderService) {
    this.paypal();
  }

  ngOnInit(): void {
    this.getCartList();
    this.getValue();
  }

  getValue() {
    this.total = 20000;
    if (this.cartDto != null) {
      this.quantity = this.cartDto.length;
      for (let i = 0; i < this.cartDto.length; i++) {
        if (this.cartDto[i].size == '10kg') {
          this.total += this.cartDto[i].product.price * this.cartDto[i].quantity;
        }
        if (this.cartDto[i].size == '15kg') {
          this.total += (this.cartDto[i].product.price + 15000) * this.cartDto[i].quantity;
        }
        if (this.cartDto[i].size == '20kg') {
          this.total += (this.cartDto[i].product.price + 20000) * this.cartDto[i].quantity;
          debugger
        }
        if (this.cartDto[i].size == '30kg') {
          this.total += (this.cartDto[i].product.price + 30000) * this.cartDto[i].quantity;
        }
        if (this.cartDto[i].size == '35kg') {
          this.total += (this.cartDto[i].product.price + 35000) * this.cartDto[i].quantity;
        }
      }
    }
  }


  getCartList(): void {
    this.idAccount = Number(this.tokenService.getId());
    this.cartService.showAllCart(this.idAccount).subscribe(next => {
      this.cartDto = next;
      for (let i = 0; i < next.length; i++) {
        this.total = +next[i].product.price * +next[i].quantity;
      }
    });
  }

  setSize(size, cart: number, productId: number, productName: string) {
    for (let i = 0; i < this.cartDto.length; i++) {
      if (this.cartDto[i].size == size && this.cartDto[i].product.id == productId && this.cartDto[i].account.id == +this.tokenService.getId()) {
        Swal.fire({
          title: 'đã có size này rồi!',
          text: 'Mặt hàng: ' + '"' + productName + '"' + ' đã có size: ' + '"' + size + '"' + ' rồi nhé!',
          html: '<img src="' + this.cartDto[i].product.image + '" style="width:200px; height: 110px">',
          cancelButtonColor: '#0099FF',
          cancelButtonText: 'Đã hiểu'
        });
        this.getValue();
        return;
      }
    }
    this.cartService.editCart(size, cart, productId, +this.tokenService.getId()).subscribe(next => {
      this.getCartList();
      this.getValue();
    });
    this.shareService.sendClickEvent();
  }

  stepUp(productId: number, size: string) {
    this.cartService.increaseQuantity(+this.tokenService.getId(), productId, size).subscribe(next => {
      this.shareService.sendClickEvent();
      this.getCartList();
      this.getValue();
    });
  }

  stepDown(productId: number, size: string) {
    this.cartService.reduceQuantity(this.tokenService.getId(), productId, size).subscribe(next => {
      this.shareService.sendClickEvent();
      this.getCartList();
      this.getValue();
    });
  }

  deleteCart(id) {
    this.cartService.deleteCart(id).subscribe(next => {
      this.shareService.sendClickEvent();
      Swal.fire({
        title: 'Gỡ bỏ thành công khỏi giỏ hàng!',
        cancelButtonColor: '#0099FF',
      });
      this.getCartList();
      this.getValue()
    });
  }

  paypal() {
    this.isPaypal = true;
    let money = +((this.total + 20000) / 23485.5).toFixed(2);
    render({
      currency: 'USD',
      id: '#myPaypal',
      value: String(money),
      onApprove: (details) => {
        this.addBill();
        this.shareService.getClickEvent();
      }
    });
  }

  private addBill() {
    let currentTime = new Date();
    let formatTime = currentTime.toLocaleString();
    this.orderService.addBill(this.tokenService.getId(), this.total, formatTime).subscribe(next => {
      Swal.fire({
        position: 'center',
        title: 'Đã thanh toán thành công',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      });
      this.cartDto = [];
      this.loader();
      this.shareService.sendClickEvent();
    }, error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Thanh toán thất bại!',
        text: 'Thanh toán thất bại',
        showConfirmButton: false,
        timer: 2000
      });
    });
  }

  private loader() {

  }
}
