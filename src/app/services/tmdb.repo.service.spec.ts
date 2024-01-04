import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Movie, ReqWithDates } from '../model/tmdb.model';
import { TmdbRepoService } from './tmdb.repo.service';

describe('Given the TmdbRepoService Class', () => {
  let service: TmdbRepoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(TmdbRepoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  describe('When the service is instantiated', () => {
    it('Then it should be created successfully', () => {
      expect(service).toBeTruthy();
    });

    it('Then it should retrieve now playing movies', () => {
      const page = '1';
      const mockResponse: ReqWithDates = {
        dates: { maximum: '2023-12-31', minimum: '2023-01-01' },
        page: 1,
        results: [],
        total_pages: 10,
        total_results: 100,
      };

      service.getMoviesList(page).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne((request) =>
        request.url.includes('https://api.themoviedb.org/3/1')
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });

    it('Then it should retrieve a movie by ID', () => {
      const id = '123';
      const mockResponse: Movie = {} as unknown as Movie;

      service.getById(id).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne((request) =>
        request.url.includes(`/${id}`)
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });
});
