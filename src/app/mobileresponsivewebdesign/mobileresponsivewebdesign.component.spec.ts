import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileresponsivewebdesignComponent } from './mobileresponsivewebdesign.component';

describe('MobileresponsivewebdesignComponent', () => {
  let component: MobileresponsivewebdesignComponent;
  let fixture: ComponentFixture<MobileresponsivewebdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileresponsivewebdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileresponsivewebdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
