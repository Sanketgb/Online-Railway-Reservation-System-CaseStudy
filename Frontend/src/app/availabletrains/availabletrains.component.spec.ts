import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabletrainsComponent } from './availabletrains.component';

describe('AvailabletrainsComponent', () => {
  let component: AvailabletrainsComponent;
  let fixture: ComponentFixture<AvailabletrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabletrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabletrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
