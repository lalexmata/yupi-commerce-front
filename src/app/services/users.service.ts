import { Injectable } from '@angular/core';
import { UsersInterface } from '../shared/interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  take(cantidad: number){
    return fetch(`https://fakestoreapi.com/users?limit=${cantidad}`)
    .then(res=>res.json())
    .then(json=>console.log(json))
  }
}
