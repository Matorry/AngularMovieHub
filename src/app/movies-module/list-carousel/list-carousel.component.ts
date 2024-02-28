import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie, Tv } from 'src/app/model/tmdb.model';

@Component({
  selector: 'app-list-carousel',
  templateUrl: './list-carousel.component.html',
  styleUrls: ['./list-carousel.component.scss'],
})
export class MovieListCarousel implements OnInit, OnDestroy {
  @Input() movies: (Movie | Tv)[] = [];
  @Input() title: string = '';
  counter: number = -1;
  intervalId: any;
  circles: boolean[] = [];

  ngOnInit() {
    this.navigateToNext();
  }

  controlMovieList(action: string) {
    switch (action) {
      case '+':
        this.counter++;
        break;
      case '-':
        this.counter--;
        break;
    }

    if (this.counter >= this.movies.length) {
      this.counter = 0;
    } else if (this.counter < 0) {
      this.counter = this.movies.length - 1;
    }
    this.updateCircles();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateCircles() {
    this.circles = Array(this.movies.length).fill(false);
    this.circles[this.counter] = true;
  }

  loadMovie(index: number) {
    this.counter = index;
    this.updateCircles();
  }

  navigateToNext() {
    this.controlMovieList('+');
    clearInterval(this.intervalId);
    this.autoNavigateToNext();
  }

  navigateToPrevious() {
    this.controlMovieList('-');
    clearInterval(this.intervalId);
    this.autoNavigateToNext();
  }

  autoNavigateToNext() {
    this.intervalId = setInterval(() => {
      this.controlMovieList('+');
    }, 3000);
  }
}
