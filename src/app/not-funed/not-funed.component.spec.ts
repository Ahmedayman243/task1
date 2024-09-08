import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFunedComponent } from './not-funed.component';

describe('NotFunedComponent', () => {
  let component: NotFunedComponent;
  let fixture: ComponentFixture<NotFunedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFunedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFunedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
