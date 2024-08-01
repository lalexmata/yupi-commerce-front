import { Component, Input } from '@angular/core';
import { CarouselData } from '../../interfaces/carousel.interface';

@Component({
  selector: 'yupi-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() data: CarouselData[] = [];
}
