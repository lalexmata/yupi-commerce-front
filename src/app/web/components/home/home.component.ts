import { Component, OnInit } from '@angular/core';
import { CarouselData } from '../../../shared/interfaces/carousel.interface';
import { UsersService } from '../../../services/users.service';
import { UsersInterface } from '../../../shared/interfaces/users.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public carouselData: CarouselData[] = [
    {
      imagen: 'https://picsum.photos/id/944/900/500',
      titulo: 'titulo de imagen 1'
    },
    {
      imagen: 'https://picsum.photos/id/1011/900/500',
    },
    {
      imagen: 'https://picsum.photos/id/984/900/500',
    },
  ]

  public usersList: UsersInterface[] = [];

  constructor(
    private userService: UsersService
  ){

  }
  ngOnInit(): void {
    this.obtenerUsuarios();
  }


  obtenerUsuarios(): void {
    this.userService.take(5).subscribe((resp) => {
      if(resp){
        this.usersList = resp;
      }
    });
  }
}
