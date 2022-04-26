import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetrainsComponent } from './managetrains.component';

describe('ManagetrainsComponent', () => {
  let component: ManagetrainsComponent;
  let fixture: ComponentFixture<ManagetrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagetrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
