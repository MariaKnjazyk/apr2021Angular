import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'apr2021Angular';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
}
