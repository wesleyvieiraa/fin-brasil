import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';
declare var pg: any;
@Component({
  selector: 'casual-layout',
  templateUrl: './casual.component.html',
  styleUrls: ['./casual.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CasualLayout extends RootLayout implements OnInit {
  menuItems = [
    
    {
      label: 'Dashboard',
      routerLink: 'graficos',
      iconType: 'pg',
      iconName: 'charts'
    }
  ];
  ngOnInit() {
    pg.isHorizontalLayout = true;
    this.changeLayout('horizontal-menu');
    this.changeLayout('horizontal-app-menu');
  }
}
