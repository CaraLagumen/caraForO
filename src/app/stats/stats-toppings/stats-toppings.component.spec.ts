import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsToppingsComponent } from './stats-toppings.component';

describe('StatsToppingsComponent', () => {
  let component: StatsToppingsComponent;
  let fixture: ComponentFixture<StatsToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
