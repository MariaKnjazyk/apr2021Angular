import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.activatedRoute.params.subscribe((value) => {
        console.log(this.router.getCurrentNavigation());
        this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
      })
    } else {
      this.activatedRoute.params.subscribe(({id}) =>{
        this.userService.getUserById(id).subscribe(value => this.user=value);
      })
    }

  }

}
