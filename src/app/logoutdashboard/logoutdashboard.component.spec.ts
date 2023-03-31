import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutdashboardComponent } from './logoutdashboard.component';

describe('LogoutdashboardComponent', () => {
  let component: LogoutdashboardComponent;
  let fixture: ComponentFixture<LogoutdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
