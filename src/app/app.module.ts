// Angular Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Routing
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

// Layouts
import {
  CondensedComponent,
  BlankComponent,
  RootLayout,
  CorporateLayout,
  SimplyWhiteLayout,
  ExecutiveLayout,
  CasualLayout,
  DemoComponent,
} from '@pages/layouts';
// Layout Service - Required
import { pagesToggleService } from '@pages/services/toggler.service';

// Shared Layout Components
import { SidebarComponent } from '@pages/components/sidebar/sidebar.component';
import { QuickviewComponent } from '@pages/components/quickview/quickview.component';
import { QuickviewService } from '@pages/components/quickview/quickview.service';
import { SearchOverlayComponent } from '@pages/components/search-overlay/search-overlay.component';
import { HeaderComponent } from '@pages/components/header/header.component';
import { HorizontalMenuComponent } from '@pages/components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from '@pages/components/shared.module';
import { pgListViewModule } from '@pages/components/list-view/list-view.module';
import { pgCardModule } from '@pages/components/card/card.module';
import { pgCardSocialModule } from '@pages/components/card-social/card-social.module';

// Basic Bootstrap Modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

// Pages Globaly required Components - Optional
import { pgTabsModule } from '@pages/components/tabs/tabs.module';
import { ProgressModule } from '@pages/components/progress/progress.module';

// Thirdparty Components / Plugins - Optional
import { NgxEchartsModule } from 'ngx-echarts';
import { StepsformDirective } from './social/stepsform.directive';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NvD3Module } from 'ng2-nvd3';
import { NgxMasonryModule } from 'ngx-masonry';

// Service - Demo content - Optional
import { ChartService } from './charts/charts.service';
import { SocialService } from './social/social.service';

// Social Page - Optional
import { SocialComponent } from './social/social.component';
import { CoverpageDirective } from './social/coverpage.directive';

// Demo Pages - Optional
import { CardsComponentPage } from './cards/cards.component';
import { ViewsPageComponent } from './views/views.component';
import { ChartsComponent } from './charts/charts.component';

// Dashboard Widgets - Optional
import { DashboardModule } from './dashboard/dashboard.module';

// Dashboards - Optional
import { CondensedDashboardComponent } from './dashboard/condensed/dashboard.component';
import { SimplyWhiteDashboardComponent } from './dashboard/simplywhite/dashboard.component';
import { CasualDashboardComponent } from './dashboard/casual/dashboard.component';
import { CorporateDashboardComponent } from './dashboard/corporate/dashboard.component';
import { ExecutiveDashboardComponent } from './dashboard/executive/dashboard.component';

// Sample Blank Pages - Optional
import { BlankCorporateComponent } from '@pages/layouts/blank-corporate/blank-corporate.component';
import { BlankSimplywhiteComponent } from '@pages/layouts/blank-simplywhite/blank-simplywhite.component';
import { BlankCasualComponent } from '@pages/layouts/blank-casual/blank-casual.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

// Hammer Config Overide
// https://github.com/angular/angular/issues/10541
@Injectable()
export class AppHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CondensedComponent,
    CorporateLayout,
    SimplyWhiteLayout,
    ExecutiveLayout,
    CasualLayout,
    SidebarComponent,
    QuickviewComponent,
    SearchOverlayComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    BlankComponent,
    DemoComponent, //Remove in production
    RootLayout,
    CardsComponentPage,
    ViewsPageComponent,
    ChartsComponent,
    SocialComponent,
    StepsformDirective,
    CoverpageDirective,
    CondensedDashboardComponent,
    SimplyWhiteDashboardComponent,
    CasualDashboardComponent,
    CorporateDashboardComponent,
    ExecutiveDashboardComponent,
    BlankCorporateComponent,
    BlankSimplywhiteComponent,
    BlankCasualComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ProgressModule,
    pgListViewModule,
    pgCardModule,
    pgCardSocialModule,
    RouterModule.forRoot(AppRoutes, { relativeLinkResolution: 'legacy' }),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    pgTabsModule,
    //NgxEchartsModule,
    // IsotopeModule,
    NgxDnDModule,
    QuillModule.forRoot(),
    PerfectScrollbarModule,
    DashboardModule,
    NgxMasonryModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NvD3Module,
  ],

  providers: [
    QuickviewService,
    pagesToggleService,
    ChartService,
    SocialService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: AppHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
