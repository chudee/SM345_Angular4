import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AdminUserService } from '../../../../services/admin-user/admin-user.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users: User[];
  displayedColumns = ['selected', 'id', 'name', 'auth'];
  dataSource;

  selectedUsers: User[] = [];

  constructor(
    private router: Router,
    private adminUserService: AdminUserService
  ) { }
  
  ngOnInit() {
    this.getUsers();
  }
  
  getUsers() {
    this.adminUserService
    .getUsers()
    .then(users => {
      this.users = users
      this.dataSource = new ExampleDataSource(this.users);
    });
  }

  selectClick(user) {
    const selectedIndex = this.selectedUsers.indexOf(user);
    let newSelected = [];

    if(selectedIndex === -1) {
      newSelected = newSelected.concat(this.selectedUsers, user);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(this.selectedUsers.slice(1));
    } else if (selectedIndex === this.selectedUsers.length - 1) {
      newSelected = newSelected.concat(this.selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        this.selectedUsers.slice(0, selectedIndex),
        this.selectedUsers.slice(selectedIndex + 1),
      );
    }
    this.selectedUsers = newSelected;
  }

  selectAllClick(users) {
    const length = this.selectedUsers.length;
    this.isSelected(users);
    if(length === 0) {
      users.map(user => this.selectedUsers.push(user));
      return;
    } else if(length === users.length) {
      this.selectedUsers = [];
    } else {
      this.selectedUsers = [];
      users.map(user => this.selectedUsers.push(user));
    }
  }

  isSelected = user => this.selectedUsers.indexOf(user) !== -1;

}

export class ExampleDataSource extends DataSource<any> {
  constructor(
    private users: any
  ) { 
    super()
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<User[]> {
    return Observable.of(this.users);
  }
  
  disconnect() {}
}