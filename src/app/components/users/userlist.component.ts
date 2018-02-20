import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
})
export class UserListComponent implements OnInit {
/* 
  userList: any[] = [
    {id:1, name: 'Micky', age:100},
    {id:2, name: 'Donald', age:10},
    {id:3, name: 'Goofy', age:60}
  ]; */

  userList: any[];
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userList = this.usersService.getUserList();
  }

  loadUser(uid: number) {
    this.router.navigate(['/users', uid], {queryParams: { edit: 'true'}, fragment:'testfragement'});
  }
}
