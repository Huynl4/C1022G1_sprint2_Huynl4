import {Component, Inject, Input, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {DOCUMENT, ViewportScroller} from "@angular/common";
import {TokenService} from "../../service/token.service";
import {ShareService} from "../../service/share.service";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  account: Account = {displayName: '', id: '', imageURL: '', rpDisplayName: '', name: ''};
  isLogged = false;
  role = '';
  @Input() inputValue: string;
  private id: number;
  infoAccount: Account;
  constructor(@Inject(DOCUMENT) private document: any,
              private scroller: ViewportScroller,
              private token: TokenService,
              private share: ShareService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {

    window.scroll(0, 0);
    this.isLogged = this.token.isLogger();
    this.loadAccount();
    this.share.getClickEvent().subscribe(next => {
      this.isLogged = this.token.isLogger();
      this.loadAccount();

    });

  }

  loadAccount() {
    if (this.isLogged) {
      this.loginService.profile(this.token.getId()).subscribe(next => this.account = next);
      this.role = this.token.getRole();
    }

  }

  scrollToPosition() {
    // this.scroller.scrollToPosition([0, 800]);
  }

  logout() {
    this.token.logout();
    this.share.sendClickEvent();
    this.isLogged = false;
    Swal.fire('Đăng xuất thành công',
      '',
      'success');

  }


  scrollToTopLogin() {
    window.scroll(0, 0);
  }

  onSearch() {
    this.router.navigate(['/getListSearchResults'], {queryParams: {'name': this.inputValue}});
    console.log(this.inputValue);
  }

  scrollToElement() {
    window.scroll(0, 2500);
  }

  // getInfoAccount(id: number) {
  //   this.productService.findByIdAccount(id).subscribe(next => {
  //     this.infoAccount = next;
  //     console.log(next);
  //   });
  // }

}
