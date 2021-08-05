import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IPost} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;
  classButton: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) {
    this.dataService.getCurretnValue().subscribe(value => {
      if(value!=this.post?.id){
        this.classButton='show'
      }
    })
  }

  ngOnInit(): void {
  }

  navigateToPostDetails(): void {
    this.classButton = 'hide';
    this.router.navigate(['posts', this.post.id], {state: this.post});

  }


}

