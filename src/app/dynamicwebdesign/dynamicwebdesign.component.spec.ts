import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicwebdesignComponent } from './dynamicwebdesign.component';

describe('DynamicwebdesignComponent', () => {
  let component: DynamicwebdesignComponent;
  let fixture: ComponentFixture<DynamicwebdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicwebdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicwebdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
