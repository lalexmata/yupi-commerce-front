import { Injectable } from '@angular/core';
import { UsersInterface } from '../shared/interfaces/users.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  take(cantidad: number): Observable<UsersInterface[]>{
    return this.httpClient.get<UsersInterface[]>(`https://fakestoreapi.com/users?limit=${cantidad}`)
  }
}
