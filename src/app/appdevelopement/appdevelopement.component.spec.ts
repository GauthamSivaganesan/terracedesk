import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdevelopementComponent } from './appdevelopement.component';

describe('AppdevelopementComponent', () => {
  let component: AppdevelopementComponent;
  let fixture: ComponentFixture<AppdevelopementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdevelopementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
