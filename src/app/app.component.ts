import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
// import {IPost, IUser} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apr2021Angular';
  // a:IUser;
  // b:IPost

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  navigateToUsersPage(): void {
    this.router.navigate(['users'], {relativeTo: this.activatedRoute})
  }

  navigateToPostsPage(): void {
    this.router.navigate(['posts'], {relativeTo: this.activatedRoute})
  }
}
