import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitydevComponentComponent } from './unitydev-component.component';

describe('UnitydevComponentComponent', () => {
  let component: UnitydevComponentComponent;
  let fixture: ComponentFixture<UnitydevComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitydevComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitydevComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
