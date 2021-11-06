import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisedwebdesignComponent } from './customisedwebdesign.component';

describe('CustomisedwebdesignComponent', () => {
  let component: CustomisedwebdesignComponent;
  let fixture: ComponentFixture<CustomisedwebdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomisedwebdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomisedwebdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
