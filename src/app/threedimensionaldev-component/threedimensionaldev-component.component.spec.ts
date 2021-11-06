import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedimensionaldevComponentComponent } from './threedimensionaldev-component.component';

describe('ThreedimensionaldevComponentComponent', () => {
  let component: ThreedimensionaldevComponentComponent;
  let fixture: ComponentFixture<ThreedimensionaldevComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedimensionaldevComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedimensionaldevComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
