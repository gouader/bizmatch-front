import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordFinalStepComponent } from './reset-password-final-step.component';

describe('ResetPasswordFinalStepComponent', () => {
  let component: ResetPasswordFinalStepComponent;
  let fixture: ComponentFixture<ResetPasswordFinalStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordFinalStepComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordFinalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
