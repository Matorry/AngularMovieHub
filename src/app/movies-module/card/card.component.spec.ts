import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Movie, Tv } from 'src/app/model/tmdb.model';
import { CardComponent } from './card.component';

describe('Given the CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When the CardComponent is created', () => {
    it('Then it should be created', () => {
      expect(component).toBeTruthy();
    });

    it('Then i call getImageUrl method', () => {
      const testUrl = component.getImageUrl('test', 500);
      expect(testUrl).toEqual('https://image.tmdb.org/t/p/w500/test');
    });

    it('Then i call getImageUrl method without backdropPath', () => {
      const testUrl = component.getImageUrl('', 500);
      expect(testUrl).toEqual('');
    });

    it('Then i call isMovie method ', () => {
      const testMovie = component.isMovie({} as Movie);
      expect(testMovie).toEqual(false);
    });

    it('Then i call isTvShow method ', () => {
      const testMovie = component.isTvShow({} as Tv);
      expect(testMovie).toEqual(false);
    });
  });
});
