import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardComponent } from '../card/card.component';
import { ListComponent } from '../list/list.component';
import { MoviesDashboardComponent } from './movies-dashboard.component';

describe('Given the MoviesDashboardComponent', () => {
  let component: MoviesDashboardComponent;
  let fixture: ComponentFixture<MoviesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesDashboardComponent, ListComponent, CardComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(MoviesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('When the MoviesDashboardComponent is created', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
