import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from './header.component';

describe('Given the HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MenuComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When the header component is created', () => {
    it('Then it should be created', () => {
      expect(component).toBeTruthy();
    });

    it('Then setMode method', () => {
      component.setMode(false);
      expect(component.stateIsMovies).toEqual(false);
    });
  });
});
