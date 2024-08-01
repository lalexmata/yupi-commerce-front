import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutWebComponent } from './components/layout-web/layout-web.component';
import { FooterComponent } from './components/footer/footer.component';


const modules = [
  MaterialModule
]
const components = [
  HeaderComponent,
  LayoutWebComponent,
  FooterComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [
    CommonModule,
    ...modules
  ],
  exports : [
    ...components, ...modules
  ]
})
export class SharedModule { }
