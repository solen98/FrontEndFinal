import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHardskillComponent } from './modal-hardskill.component';

describe('ModalHardskillComponent', () => {
  let component: ModalHardskillComponent;
  let fixture: ComponentFixture<ModalHardskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHardskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHardskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
