import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { DetailMovieComponent } from './detail-movie.component';

describe('DetailComponent', () => {
  let component: DetailMovieComponent;
  let fixture: ComponentFixture<DetailMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMovieComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '123' }),
            },
          },
        },
      ],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(DetailMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
