import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAccountCreationComponent } from './verify-account-creation.component';

describe('VerifyAccountCreationComponent', () => {
  let component: VerifyAccountCreationComponent;
  let fixture: ComponentFixture<VerifyAccountCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VerifyAccountCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyAccountCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
