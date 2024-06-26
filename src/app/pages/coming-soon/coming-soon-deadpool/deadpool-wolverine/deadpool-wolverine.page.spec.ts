import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeadpoolWolverinePage } from './deadpool-wolverine.page';

describe('DeadpoolWolverinePage', () => {
  let component: DeadpoolWolverinePage;
  let fixture: ComponentFixture<DeadpoolWolverinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadpoolWolverinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
