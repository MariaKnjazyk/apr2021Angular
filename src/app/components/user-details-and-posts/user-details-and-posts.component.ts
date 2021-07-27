import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details-and-posts',
  templateUrl: './user-details-and-posts.component.html',
  styleUrls: ['./user-details-and-posts.component.scss']
})
export class UserDetailsAndPostsComponent implements OnInit {
  posts: IPost[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.userService.getUserPostsById(id).subscribe(value => this.posts=value);
    })
  }

  ngOnInit(): void {
  }

}
