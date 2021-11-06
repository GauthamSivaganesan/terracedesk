import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedevelopementComponent } from './gamedevelopement.component';

describe('GamedevelopementComponent', () => {
  let component: GamedevelopementComponent;
  let fixture: ComponentFixture<GamedevelopementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamedevelopementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamedevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
