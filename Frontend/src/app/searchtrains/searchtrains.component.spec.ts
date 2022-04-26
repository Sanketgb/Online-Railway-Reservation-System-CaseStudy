import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtrainsComponent } from './searchtrains.component';

describe('SearchtrainsComponent', () => {
  let component: SearchtrainsComponent;
  let fixture: ComponentFixture<SearchtrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
