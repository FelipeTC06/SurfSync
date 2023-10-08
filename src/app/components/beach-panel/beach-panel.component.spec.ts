import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachPanelComponent } from './beach-panel.component';

describe('BeachPanelComponent', () => {
  let component: BeachPanelComponent;
  let fixture: ComponentFixture<BeachPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BeachPanelComponent]
    });
    fixture = TestBed.createComponent(BeachPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
