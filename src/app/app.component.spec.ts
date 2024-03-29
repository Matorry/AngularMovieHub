import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { MenuComponent } from './core/menu/menu.component';

describe('Given the AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
      ],
    })
  );

  describe('When the app component is created', () => {
    it('Then it should be created', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`Then it should have a title 'AngularMovieHub'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance as AppComponent;
      expect(app.title).toEqual('AngularMovieHub');
    });

    it('Then it should render the title in an H1 tag', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain(
        'AngularMovieHub'
      );
    });
  });
});
