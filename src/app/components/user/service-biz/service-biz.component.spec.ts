import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBizComponent } from './service-biz.component';

describe('ServiceBizComponent', () => {
  let component: ServiceBizComponent;
  let fixture: ComponentFixture<ServiceBizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBizComponent]
    });
    fixture = TestBed.createComponent(ServiceBizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
