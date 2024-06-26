import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InAVionlentNaturePage } from './in-a-vionlent-nature.page';

describe('InAVionlentNaturePage', () => {
  let component: InAVionlentNaturePage;
  let fixture: ComponentFixture<InAVionlentNaturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InAVionlentNaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
