import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticwebdesignComponent } from './staticwebdesign.component';

describe('StaticwebdesignComponent', () => {
  let component: StaticwebdesignComponent;
  let fixture: ComponentFixture<StaticwebdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticwebdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticwebdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
