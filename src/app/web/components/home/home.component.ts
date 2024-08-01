import { Component, OnInit } from '@angular/core';
import { CarouselData } from '../../../shared/interfaces/carousel.interface';
import { UsersService } from '../../../services/users.service';

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

  public usersList: any;

  constructor(
    private userService: UsersService
  ){

  }
  ngOnInit(): void {
    console.log('holis');
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this.usersList = this.userService.take(5);
  }
}
