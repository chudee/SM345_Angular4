import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_name: string;
  user_id: string;

  constructor(private router: Router) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    this.user_name = user.user_name
    this.user_id = user.user_id
  }

  logout() {
    this.router.navigateByUrl('/login')
  }

}
