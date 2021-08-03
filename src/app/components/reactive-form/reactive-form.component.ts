import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../models/IUser";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  @Input()
  users: IUser[];

  id = new FormControl('');

  myForm: FormGroup = new FormGroup(
    {
      name: this.id,

    }
  );

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.userService.getAllUsers().subscribe(value => this.users=value)
  }

  userDetails(){
    this.router.navigate(['users',this.id.value], {state: this.users.find(user=> user.id===this.id.value)})
  }

}
