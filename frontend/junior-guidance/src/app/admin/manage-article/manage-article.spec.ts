import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageArticle } from './manage-article';

describe('ManageArticle', () => {
  let component: ManageArticle;
  let fixture: ComponentFixture<ManageArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
