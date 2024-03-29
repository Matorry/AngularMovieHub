export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Tv = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  poster_path: string;
  backdrop_path: string;
};

export type Genre = {
  id: number;
  name: string;
};

type Dates = {
  maximum: string;
  minimum: string;
};

export type Req = {
  page: number;
  results: Movie[] | Tv[];
  total_pages: number;
  total_results: number;
};

export type ReqWithDates = {
  dates: Dates;
  page: number;
  results: Movie[] | Tv[];
  total_pages: number;
  total_results: number;
};
