import { Routes } from '@angular/router';
//Layouts
import {
  CondensedComponent,
  BlankComponent,
  CorporateLayout,
  SimplyWhiteLayout,
  ExecutiveLayout,
  CasualLayout,
  BlankCasualComponent,
  BlankCorporateComponent,
  BlankSimplywhiteComponent,
  DemoComponent
} from '@pages/layouts';

//Sample Pages
import { CondensedDashboardComponent } from './dashboard/condensed/dashboard.component';
import { SimplyWhiteDashboardComponent } from './dashboard/simplywhite/dashboard.component';
import { CasualDashboardComponent } from './dashboard/casual/dashboard.component';
import { CorporateDashboardComponent } from './dashboard/corporate/dashboard.component';
import { ExecutiveDashboardComponent } from './dashboard/executive/dashboard.component';
import { CardsComponentPage } from './cards/cards.component';
import { ViewsPageComponent } from './views/views.component';
import { ChartsComponent } from './charts/charts.component';
import { SocialComponent } from './social/social.component';

export const AppRoutes: Routes = [
  {
    path: '**',
    redirectTo: 'graficos',
    pathMatch: 'full'
  },
  //Casual

  {
    path: '',
    component: CasualLayout,
    children: [
      {
        path: 'graficos',
        component: ChartsComponent
      }
    ]
  }
];
