import {Routes} from "@angular/router";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {UserResolveService} from "../services/user-resolve.service";
import {TdFormComponent} from "../components/td-form/td-form.component";

export const routes: Routes =[
  {path: '', component: TdFormComponent, resolve: {data: UserResolveService}, children: [
      {path: 'users/:id', component: UserDetailsComponent},
    ]},
  {path: 'users', redirectTo: ''}
];
