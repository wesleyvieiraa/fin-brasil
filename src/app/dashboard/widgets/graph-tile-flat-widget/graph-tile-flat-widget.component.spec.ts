import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraphTileFlatWidgetComponent } from './graph-tile-flat-widget.component';

describe('GraphTileFlatWidgetComponent', () => {
  let component: GraphTileFlatWidgetComponent;
  let fixture: ComponentFixture<GraphTileFlatWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GraphTileFlatWidgetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTileFlatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
