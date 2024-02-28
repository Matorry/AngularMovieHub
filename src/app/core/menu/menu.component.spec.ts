import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('Given the MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When the menu component is created', () => {
    it('Then it should be created', () => {
      expect(component).toBeTruthy();
    });

    it('Then handleChangeMode', () => {
      const spy = spyOn(component.isMovies, 'emit');
      component.stateIsMovies = true;
      component.handleChangeMode();
      expect(spy).toHaveBeenCalledWith(false);
    });
  });
});
