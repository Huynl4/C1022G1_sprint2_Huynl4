import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT, ViewportScroller} from "@angular/common";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {ShareService} from "../../service/share.service";
import {Product} from "../../entity/product";
import Swal from "sweetalert2";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  productList: Product[] = [];
  productList1: Product[] = [];
  hasMore = false;
  page = 0;
  size = 4;
  sizeFood = '10kg'
  hasMore1 = false;
  hasMore2 = false;
  page1 = 0;
  size1 = 4;
  page2 = 0;
  size2 = 4;
  displayedCount: number = 0;
  moreFruit: boolean;
  isLogged: Boolean = false;

  constructor(@Inject(DOCUMENT) private document: any,
              private viewportScroller: ViewportScroller,
              private productService: ProductService,
              private cartService: CartService,
              private token: TokenService,
              private router: Router,
              private shareService: ShareService) {
    this.loadListBanhNgot();
  }

  ngOnInit(): void {
  }

  loadListBanhNgot() {
    this.moreFruit = false;
    this.productList = [];
    this.page = 0;
    this.productService.getProductBanhNgot(this.page, this.size).subscribe(products => {
      this.productList = products;
      this.hasMore = products.length === this.size;
      // console.log('ádasdasd');
    });
  }

  loadListBanhMan() {
    this.productList = null;
    this.moreFruit = true;
    this.productList = [];
    this.page1 = 0;
    this.productService.getProductBanhMan(this.page1, this.size1).subscribe(products => {
      this.productList = products;
      this.hasMore1 = products.length === this.size1;
    });
  }

  loadListBanhChay() {
    this.productList = null;
    this.moreFruit = true;
    this.productList = [];
    this.page2 = 0;
    this.productService.getProductBanhChay(this.page2, this.size2).subscribe(products => {
      this.productList = products;
      this.hasMore2 = products.length === this.size2;
    });
  }

  loadMore() {
    this.page++;
    this.productService.getProductBanhNgot(this.page, this.size).subscribe(products => {
      this.productList.push(...products);
      this.hasMore = products.length === this.size;
      this.displayedCount += this.page;
    });
  }

  loadMore1() {
    this.page1++;
    this.productService.getProductBanhMan(this.page1, this.size1).subscribe(products => {
      this.productList.push(...products);
      this.hasMore1 = products.length === this.size1;
      this.displayedCount += this.page1;
    });
  }

  loadMore2() {
    this.page2++;
    this.productService.getProductBanhChay(this.page2, this.size2).subscribe(products => {
      this.productList.push(...products);
      this.hasMore2 = products.length === this.size2;
      this.displayedCount += this.page2;
    });
  }

  ngOnDestroy(): void {
    this.loadListBanhNgot();
    this.loadListBanhMan();
    this.loadListBanhChay();
  }

  addCart(id: number) {
    let quantity = 1
    // const quantity = parseInt(value)
    if (this.isLogged == true) {
      Swal.fire({
        title: 'Bạn bạn hiện tại chưa đăng nhập',
        text: 'Bạn có muốn vào trang đăng nhập không?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#0099FF',
        cancelButtonColor: '#BBBBBB',
        confirmButtonText: 'Đăng nhập',
        cancelButtonText: 'Không'
      }).then((result) => {
        if (result.isConfirmed) {
          this.shareService.sendClickEvent()
          this.router.navigateByUrl('/login')
          this.ngOnInit()
        }
      });
    } else {
      this.cartService.addCart(this.token.getId(), id, quantity, this.sizeFood).subscribe(next => {
        debugger
        Swal.fire({
          position: 'center',
          title: 'Đã thêm vào giỏ hàng thành công',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        });
        this.shareService.sendClickEvent()
      }, error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Thêm mới thất bại!',
          text: 'Thêm mới thất bại',
          showConfirmButton: false,
          timer: 2000
        });
      })
    }
  }
}
