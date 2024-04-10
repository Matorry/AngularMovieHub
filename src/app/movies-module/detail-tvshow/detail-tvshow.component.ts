import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Season, SerieDetail } from 'src/app/model/tmdb.detail.model';
import { MoviesService } from 'src/app/services/movies.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-detail-tvshow',
  templateUrl: './detail-tvshow.component.html',
  styleUrls: ['./detail-tvshow.component.scss'],
})
export class DetailTvshowComponent implements OnInit {
  id: string | null = null;
  dataTvShow: {
    serie: SerieDetail;
    currentSeason: Season;
  } | null = null;
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
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isLoading = true;
      this.moviesService.fetchSerieDetails(this.id);
      this.state.getSerieDetail().subscribe({
        next: (data) => {
          if (data) {
            this.dataTvShow = data;
          }
        },
      });
    }
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log(event);
    if (this.dataTvShow)
      this.moviesService.changeSeason(
        this.dataTvShow?.serie.id,
        event.tab.textLabel
      );
  }

  getSafeUrl(videoKey: string): SafeResourceUrl {
    const videoUrl = `https://www.youtube.com/embed/${videoKey}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
