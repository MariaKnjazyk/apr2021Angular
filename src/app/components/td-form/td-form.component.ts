import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  users: IUser[];
  id: number;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.users=data)
    // this.userService.getAllUsers().subscribe(value => this.users=value)

  };


  userDetails() {
    this.router.navigate(['users',this.id], {state: this.users.find(user=> user.id===this.id)})
  }
}
