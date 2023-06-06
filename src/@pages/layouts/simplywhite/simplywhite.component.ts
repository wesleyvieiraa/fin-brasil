import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'simplywhite-layout',
  templateUrl: './simplywhite.component.html',
  styleUrls: ['./simplywhite.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimplyWhiteLayout extends RootLayout implements OnInit {
  menuLinks = [
    {
      label: 'Dashboard',
      details: '12 New Updates',
      routerLink: 'dashboard',
      iconType: 'fi',
      iconName: 'shield'
    },
    {
      label: 'Email',
      details: '234 New Emails',
      routerLink: 'email/light/list',
      iconType: 'fi',
      iconName: 'mail'
    },
    {
      label: 'Social',
      routerLink: 'social',
      iconType: 'fi',
      iconName: 'users'
    },
    {
      label: 'Builder',
      routerLink: 'builder/simplywhite-builder',
      iconType: 'fi',
      iconName: 'cpu'
    },
    {
      label: 'Layouts',
      iconType: 'fi',
      iconName: 'layout',
      toggle: 'close',
      submenu: [
        {
          label: 'Default',
          routerLink: 'layouts/default',
          iconType: 'letter',
          iconName: 'dl'
        },
        {
          label: 'Secondary',
          routerLink: 'layouts/secondary-light',
          iconType: 'letter',
          iconName: 'sl'
        },
        {
          label: 'Boxed',
          routerLink: 'layouts/boxed-alt',
          iconType: 'letter',
          iconName: 'bl'
        }
      ]
    },
    {
      label: 'UI Elements',
      iconType: 'fi',
      iconName: 'triangle',
      toggle: 'close',
      submenu: [
        {
          label: 'Color',
          routerLink: 'ui/color',
          iconType: 'letter',
          iconName: 'c'
        },
        {
          label: 'Typography',
          routerLink: 'ui/typography',
          iconType: 'letter',
          iconName: 't'
        },
        {
          label: 'Icons',
          routerLink: 'ui/icons',
          iconType: 'letter',
          iconName: 'i'
        },
        {
          label: 'Buttons',
          routerLink: 'ui/buttons',
          iconType: 'letter',
          iconName: 'b'
        },
        {
          label: 'Notifications',
          routerLink: 'ui/notifications',
          iconType: 'letter',
          iconName: 'n'
        },
        {
          label: 'Modals',
          routerLink: 'ui/modal',
          iconType: 'letter',
          iconName: 'm'
        },
        {
          label: 'Progress & Activity',
          routerLink: 'ui/progress',
          iconType: 'letter',
          iconName: 'pa'
        },
        {
          label: 'Tabs & Accordians',
          routerLink: 'ui/tabs',
          iconType: 'letter',
          iconName: 'a'
        },
        {
          label: 'Sliders',
          routerLink: 'ui/sliders',
          iconType: 'letter',
          iconName: 's'
        },
        {
          label: 'Treeview',
          routerLink: 'ui/tree',
          iconType: 'letter',
          iconName: 'tv'
        }
      ]
    },
    {
      label: 'Forms',
      iconType: 'fi',
      iconName: 'list',
      toggle: 'close',
      submenu: [
        {
          label: 'Form Elements',
          routerLink: 'forms/elements',
          iconType: 'letter',
          iconName: 'fe'
        },
        {
          label: 'Form Layouts',
          routerLink: 'forms/layouts',
          iconType: 'letter',
          iconName: 'fl'
        },
        {
          label: 'Form Wizard',
          routerLink: 'forms/wizard',
          iconType: 'letter',
          iconName: 'fq'
        }
      ]
    },
    {
      label: 'Cards',
      routerLink: 'cards',
      iconType: 'fi',
      iconName: 'grid'
    },
    {
      label: 'Views',
      routerLink: 'views',
      iconType: 'fi',
      iconName: 'airplay'
    },
    {
      label: 'Tables',
      iconType: 'fi',
      iconName: 'square',
      toggle: 'close',
      submenu: [
        {
          label: 'Basic Tables',
          routerLink: 'tables/basic',
          iconType: 'letter',
          iconName: 'bt'
        },
        {
          label: 'Advance Tables',
          routerLink: 'tables/advance',
          iconType: 'letter',
          iconName: 'dt'
        }
      ]
    },
    {
      label: 'Maps',
      iconType: 'fi',
      iconName: 'map-pin',
      toggle: 'close',
      submenu: [
        {
          label: 'Google Maps',
          routerLink: 'maps/google',
          iconType: 'letter',
          iconName: 'gm'
        }
      ]
    },
    {
      label: 'Charts',
      routerLink: 'charts',
      iconType: 'fi',
      iconName: 'bar-chart'
    },
    {
      label: 'Extra',
      iconType: 'fi',
      iconName: 'box',
      toggle: 'close',
      submenu: [
        {
          label: 'Invoice',
          routerLink: 'extra/invoice',
          iconType: 'letter',
          iconName: 'in'
        },
        {
          label: '404 Page',
          routerLink: 'session/error/404',
          iconType: 'letter',
          iconName: 'pg'
        },
        {
          label: '500 Page',
          routerLink: 'session/error/500',
          iconType: 'letter',
          iconName: 'pg'
        },
        {
          label: 'Login',
          routerLink: 'session/login',
          iconType: 'letter',
          iconName: 'l'
        },
        {
          label: 'Register',
          routerLink: 'session/register',
          iconType: 'letter',
          iconName: 're'
        },
        {
          label: 'Lockscreen',
          routerLink: 'session/lock',
          iconType: 'letter',
          iconName: 'ls'
        },
        {
          label: 'Gallery',
          routerLink: 'extra/gallery',
          iconType: 'letter',
          iconName: 'gl'
        },
        {
          label: 'Timeline',
          routerLink: 'extra/timeline',
          iconType: 'letter',
          iconName: 't'
        }
      ]
    },
    {
      label: 'Docs',
      externalLink: 'https://docs.pages.revox.io/v/angular/',
      target: '_blank',
      iconType: 'fi',
      iconName: 'life-buoy'
    },
    {
      label: 'Changelog',
      externalLink: 'http://changelog.pages.revox.io/',
      target: '_blank',
      iconType: 'letter',
      iconName: 'CG'
    }
  ];
  ngOnInit() {
    this.changeLayout('menu-pin');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}