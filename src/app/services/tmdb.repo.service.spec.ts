import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Movie, Req, ReqWithDates } from '../model/tmdb.model';
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

      service.getNowPlaying(page).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne((request) =>
        request.url.includes('/now_playing')
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });

    it('Then it should retrieve popular movies', () => {
      const page = '1';
      const mockResponse: ReqWithDates = {
        dates: { maximum: '2023-12-31', minimum: '2023-01-01' },
        page: 1,
        results: [],
        total_pages: 10,
        total_results: 100,
      };

      service.getPopular(page).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne((request) =>
        request.url.includes('/popular')
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });

    it('Then it should retrieve top rating movies', () => {
      const page = '1';
      const mockResponse: Req = {
        page: 1,
        results: [],
        total_pages: 10,
        total_results: 100,
      };

      service.getTopRating(page).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne((request) =>
        request.url.includes('/top_rated')
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });

    it('Then it should retrieve upcoming movies', () => {
      const page = '1';
      const mockResponse: ReqWithDates = {
        dates: { maximum: '2023-12-31', minimum: '2023-01-01' },
        page: 1,
        results: [],
        total_pages: 10,
        total_results: 100,
      };

      service.getUpcomming(page).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne((request) =>
        request.url.includes('/upcoming')
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

    it('Then it should retrieve images by ID', () => {
      const id = '123';
      const mockResponse: Movie = {} as unknown as Movie;

      service.getImage(id).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne((request) =>
        request.url.includes(`/${id}/images`)
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });
});
