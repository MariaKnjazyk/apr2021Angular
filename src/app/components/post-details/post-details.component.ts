import {Component, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {

    if (this.router.getCurrentNavigation()?.extras.state) {
      this.activatedRoute.params.subscribe((value) => {
        this.post=this.router.getCurrentNavigation()?.extras.state as IPost;
      })
    } else {
      this.activatedRoute.params.subscribe(({id}) => {
        this.postService.getPostById(id).subscribe(value => this.post = value);
      })
    }
  }

  ngOnInit(): void {
  }

}
