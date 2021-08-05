import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IPost} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService, PostService} from "../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;



  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {

    if (this.router.getCurrentNavigation()?.extras.state) {
      this.activatedRoute.params.subscribe((value) => {
        this.post=this.router.getCurrentNavigation()?.extras.state as IPost;
      })
      this.activatedRoute.params.subscribe(({id}) => {
        this.dataService.setNewValue(id);
      })
     } else {
      this.activatedRoute.params.subscribe(({id}) => {
        this.postService.getPostById(id).subscribe(value => this.post = value);
        this.dataService.setNewValue(id);
      })
    }


  }

  ngOnInit(): void {
  }


}

