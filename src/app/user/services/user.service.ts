import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost, IUser} from "../../models";
import {urls} from "../../configs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  }

  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`)
  }


}
