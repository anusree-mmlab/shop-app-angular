import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import {UsersService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //@Input() userSelected:any;
  //@ViewChild('f') formObject:NgForm;
  selectedUser: any;
  avalableList:string[] = ['yes','no'];
  productForm: FormGroup;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((idObj) => {
      this.selectedUser = this.usersService.getUserById(+idObj.id);
    });

    this.route.data.subscribe((data) => {
      console.log(data);
    });

    //console.log(this.formObject);

    this.productForm = new FormGroup({
      'product_name' : new FormControl(null, Validators.required),
      'product_price' : new FormControl(null, [Validators.required, Validators.min(10)]),
      'product_is_available' : new FormControl('yes'),
      
    });
  }

  onSubmit(form: NgForm) {
    console.log("Submitted",form);
  }

  onSubmitProduct() {
    console.log(this.productForm);
  }
}