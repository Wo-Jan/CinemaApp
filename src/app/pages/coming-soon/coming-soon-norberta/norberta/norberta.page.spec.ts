import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorbertaPage } from './norberta.page';

describe('NorbertaPage', () => {
  let component: NorbertaPage;
  let fixture: ComponentFixture<NorbertaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NorbertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
