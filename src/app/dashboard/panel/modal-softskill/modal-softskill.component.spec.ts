import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSoftskillComponent } from './modal-softskill.component';

describe('ModalSoftskillComponent', () => {
  let component: ModalSoftskillComponent;
  let fixture: ComponentFixture<ModalSoftskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSoftskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSoftskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
