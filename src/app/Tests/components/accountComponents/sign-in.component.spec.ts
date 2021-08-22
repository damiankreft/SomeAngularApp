import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSignInComponent } from '../../../components/accountComponents/sign-in/sign-in.component';

describe('AccountInformationComponent', () => {
  let component: AccountSignInComponent;
  let fixture: ComponentFixture<AccountSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
