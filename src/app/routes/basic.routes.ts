import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";
import {UserDetailsAndPostsComponent} from "../components/user-details-and-posts/user-details-and-posts.component";

export let routes: Routes =[
  {path: 'users', component: UsersComponent, children:[
      {path: ':id', component: UserDetailsComponent},
      {path: ':id/user-with-posts', component: UserDetailsAndPostsComponent}
    ]},
  {path: 'posts', component: PostsComponent, children:[
      {path: ':id', component: PostDetailsComponent}
    ]}
];
