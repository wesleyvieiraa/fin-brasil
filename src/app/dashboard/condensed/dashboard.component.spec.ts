import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CondensedDashboardComponent } from './dashboard.component';

describe('CondensedDashboardComponent', () => {
  let component: CondensedDashboardComponent;
  let fixture: ComponentFixture<CondensedDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CondensedDashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondensedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
