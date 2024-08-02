import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbRatingModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

const modules = [
  NgbCarouselModule,
  NgbTooltipModule,
  NgbRatingModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules]
})
export class BootstrapModule { }
