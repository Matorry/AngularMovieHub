import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  CrewMovieMember,
  MovieCreditsData,
} from 'src/app/model/tmdb.crew.model';
import { MovieDetail, SerieDetail } from 'src/app/model/tmdb.detail.model';
import { VideoReq } from 'src/app/model/tmdb.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  id: string | null = null;
  dataMovie: {
    movie: MovieDetail;
    credits: MovieCreditsData;
    videos: VideoReq;
  } | null = null;
  dataSerie: SerieDetail | null = null;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private state: StateService,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.state.getIsLoading().subscribe({
      next: (data) => (this.isLoading = data),
    });
    this.state.getIsMoviesSelect().subscribe({
      next: (data) => (this.isLoading = data),
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isLoading = true;
      this.moviesService.fetchMoviesDetails(this.id);
      this.state.getMovieDetail().subscribe({
        next: (data) => {
          this.dataMovie = data;
        },
      });
    }
  }

  getDirector(crew: CrewMovieMember[]): string | undefined {
    const director = crew.find((member) => member.job === 'Director');
    return director ? director.name : undefined;
  }

  getSafeUrl(videoKey: string): SafeResourceUrl {
    const videoUrl = `https://www.youtube.com/embed/${videoKey}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
