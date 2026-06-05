import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDetails } from './help-details';

describe('HelpDetails', () => {
  let component: HelpDetails;
  let fixture: ComponentFixture<HelpDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
