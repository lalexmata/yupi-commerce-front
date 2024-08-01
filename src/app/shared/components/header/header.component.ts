import { Component } from '@angular/core';

@Component({
  selector: 'yupi-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public active : boolean = false

  constructor() { }
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }

}
