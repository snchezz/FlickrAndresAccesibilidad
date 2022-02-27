import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavloguedComponent } from './navlogued.component';

describe('NavloguedComponent', () => {
  let component: NavloguedComponent;
  let fixture: ComponentFixture<NavloguedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavloguedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavloguedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
