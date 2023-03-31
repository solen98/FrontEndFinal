import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardashboardComponent } from './navbardashboard.component';

describe('NavbardashboardComponent', () => {
  let component: NavbardashboardComponent;
  let fixture: ComponentFixture<NavbardashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbardashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
