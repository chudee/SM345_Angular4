import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  loading = false
  error = ''

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.logout()
  }

  login() {
    this.loading = true
    this.loginService.login(this.model.id, this.model.password)
      .subscribe(result => {
        if(result === true) this.router.navigate(['/'])
        else {
          this.error = 'Id or password is incorrect';
          this.loading = false;
        }
      })
  }

}
