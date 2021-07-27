import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url);
  }

  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.url+'/'+id)
  }

  getUserPostsById(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url+'/'+id+'/posts')
  }

}
