import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CorporateBuilderComponent } from './corporate-builder.component';

describe('CorporateBuilderComponent', () => {
  let component: CorporateBuilderComponent;
  let fixture: ComponentFixture<CorporateBuilderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateBuilderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
