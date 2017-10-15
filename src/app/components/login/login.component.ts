import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string = '';
  password: string = '';
  loading: boolean = false;
  error: string = '';
  hide: boolean = true;
  
  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  ngOnInit() {
    this.loginService.logout();
  }

  onSubmit(f: NgForm) {
    console.log(f.form)
    this.loading = true;
    this.loginService.login(f.form.value.id, f.form.value.password)
        .then(result => this.router.navigate(['/']))
        .catch(e => {
          console.log(e);
          this.loading = false;
          this.getErrorMessage();
        })
  };

  getErrorMessage() {
    return this.error = '일치하지 않는 아이디 혹은 비밀번호 입니다.';
  }
}
