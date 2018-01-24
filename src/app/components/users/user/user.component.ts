import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import {UsersService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //@Input() userSelected:any;
  selectedUser: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((idObj) => {
      this.selectedUser = this.usersService.getUserById(+idObj.id);
    });

    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit(form: NgForm) {
    console.log("Submitted",form);
  }

}
