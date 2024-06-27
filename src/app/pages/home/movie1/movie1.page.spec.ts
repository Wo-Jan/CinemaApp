import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie1Page } from './movie1.page';

describe('Movie1Page', () => {
  let component: Movie1Page;
  let fixture: ComponentFixture<Movie1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Movie1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
