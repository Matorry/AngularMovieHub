export type CastMovieMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type CrewMovieMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

export type MovieCreditsData = {
  id: number;
  cast: CastMovieMember[];
  crew: CrewMovieMember[];
};

export type TvCreditsData = {
  id: number;
  cast: CastTvMember[];
  crew: CrewTvMember[];
};

export type CastTvMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  roles: [
    {
      credit_id: string;
      character: string;
      episode_count: number;
    }
  ];
  total_episode_count: number;
  order: number;
};

export type CrewTvMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  jobs: [
    {
      credit_id: string;
      job: string;
      episode_count: number;
    }
  ];
  department: string;
  total_episode_count: number;
};
