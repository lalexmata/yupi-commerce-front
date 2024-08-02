import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutWebComponent } from './components/layout-web/layout-web.component';
import { FooterComponent } from './components/footer/footer.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';


const modules = [
  MaterialModule,
  BootstrapModule
]
const components = [
  HeaderComponent,
  LayoutWebComponent,
  FooterComponent,
  CarouselComponent
]

@NgModule({
  declarations: [ ...components, CarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    ...modules
  ],
  exports : [
    ...components, ...modules
  ]
})
export class SharedModule { }
