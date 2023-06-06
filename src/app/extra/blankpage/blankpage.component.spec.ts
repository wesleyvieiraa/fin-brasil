import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlankpageComponent } from './blankpage.component';

describe('BlankpageComponent', () => {
  let component: BlankpageComponent;
  let fixture: ComponentFixture<BlankpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlankpageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
