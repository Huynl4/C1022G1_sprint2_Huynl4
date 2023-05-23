import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {TokenService} from '../../service/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../service/share.service';
import {Title} from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl(true),
  });
  messageSignUp = '';
  formSignUp = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    roles: new FormControl(['customer']),

  });

  name = 'Thông tin cá nhân';
  message = '';
  isLogged = false;

  constructor(private activate: ActivatedRoute, private title: Title, private loginService: LoginService, private token: TokenService, private router: Router, private share: ShareService) {
  }

  ngOnInit(): void {
    window.scroll(0, 780);

    this.title.setTitle('Trang Đăng Nhập');
    this.isLogged = this.token.isLogger();
    if (this.isLogged) {
      this.router.navigateByUrl('');
    }
  }

  async login() {

    this.loginService.login(this.form.value).subscribe(next => {
        if (this.form.controls.rememberMe.value) {
          this.token.rememberMe(next.token, next.id, next.name, next.email, next.roles, 'local');
          Swal.fire({
            text: 'Đăng nhập thành công',
            icon: 'success',
            iconColor: "#3CB815",
            confirmButtonText: 'OK',
            confirmButtonColor: '#3CB815',
            // showConfirmButton: false,
            timer: 2500
          });
          // token, id, name,email, roles, storage
        } else {
          this.token.rememberMe(next.token, next.id, next.name, next.email, next.roles, 'session');
        }
        this.isLogged = true;
        this.share.sendClickEvent();
        this.router.navigateByUrl('');
      }, error => {
        console.log(error);
        console.log(error);
        if (error.status == 401) {
          this.message = 'Sai tài khoản hoặc mật khẩu';
        }
        if (error.error) {
          for (let i = 0; i < error.error.length; i++) {
            this.message = error.error[i].defaultMessage;
          }
        }

      }
    );

  }

  signUp() {
    this.messageSignUp = '';
    this.loginService.register(this.formSignUp.value).subscribe(next => {
        Swal.fire('Đăng kí thành công',
          '',
          'success');
        // alert('đăng kí thành công')
      }, error => {
        console.log(error);
        for (let i = 0; i < error.error.length; i++) {
          this.messageSignUp = error.error[i].defaultMessage;
        }
      }
    );
  }

}
