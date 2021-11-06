import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodimensionaldevComponent } from './twodimensionaldev.component';

describe('TwodimensionaldevComponent', () => {
  let component: TwodimensionaldevComponent;
  let fixture: ComponentFixture<TwodimensionaldevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodimensionaldevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodimensionaldevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
