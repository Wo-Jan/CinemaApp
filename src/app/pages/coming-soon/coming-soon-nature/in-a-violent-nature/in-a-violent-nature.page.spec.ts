import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InAViolentNaturePage } from './in-a-violent-nature.page';

describe('InAViolentNaturePage', () => {
  let component: InAViolentNaturePage;
  let fixture: ComponentFixture<InAViolentNaturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InAViolentNaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
