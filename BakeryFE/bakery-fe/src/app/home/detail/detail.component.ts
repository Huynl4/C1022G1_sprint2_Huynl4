import {Component, OnInit} from '@angular/core';
import {Product} from "../../entity/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {ShareService} from "../../service/share.service";
import {CartService} from "../../service/cart.service";
import {TokenService} from "../../service/token.service";
import Swal from "sweetalert2";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  infoProduct: Product;
  isLogged: Boolean = false;
  size: string = '10kg';
  infoProductList: Product[] = [];
  moreFruit: boolean;
  page = 0;
  hasMore = false;
  size1 = 4;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private shareService: ShareService,
              private router: Router,
              private cartService: CartService,
              private token: TokenService) {
  }

  ngOnInit(): void {
    this.view();
    this.getId();
  }

  loadListBanhNgot() {
    this.moreFruit = false;
    this.infoProductList = [];
    this.page = 0;
    this.productService.getProductBanhNgot(this.page, this.size1).subscribe(products => {
      this.infoProductList = products;
      this.hasMore = products.length === this.size1;
      // console.log('ádasdasd');
    });
  }

  getId() {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getDetailById(+id);
      }
    });
  }

  view(): void {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView();
    }
  }

  private getDetailById(id: number) {
    this.productService.findProductById(id).subscribe(data => {
      this.infoProduct = data;
      console.log(this.infoProduct);

    });
  }

  addCart(id: number, value: string) {
    const quantity = parseInt(value)
    if(this.isLogged==true){
      Swal.fire({
        title: 'Bạn bạn hiện tại chưa đăng nhập',
        text: 'Bạn có muốn vào trang đăng nhập không?' ,
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
    }else {
      this.cartService.addCart(this.token.getId(),id,quantity, this.size).subscribe(next=>{
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
