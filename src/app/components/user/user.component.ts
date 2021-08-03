import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToUserDetails(): void {
    this.router.navigate(['users', this.user.id], {state: this.user})
  }

  navigateToUserDetailsAndPosts(): void {
    this.router.navigate(['users', this.user.id, 'user-with-posts'], {state: this.user})
  }

}
