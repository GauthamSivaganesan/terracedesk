import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidgamedevComponentComponent } from './androidgamedev-component.component';

describe('AndroidgamedevComponentComponent', () => {
  let component: AndroidgamedevComponentComponent;
  let fixture: ComponentFixture<AndroidgamedevComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidgamedevComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidgamedevComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
