import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie2Page } from './movie2.page';

describe('Movie2Page', () => {
  let component: Movie2Page;
  let fixture: ComponentFixture<Movie2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Movie2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
