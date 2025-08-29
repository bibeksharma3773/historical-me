export interface TimelineData {
  year: number;
  worldEvents: string[];
  topMovie: {
    title: string;
    posterUrl: string;
  } | null;
  topSong: {
    title: string;
    artist: string;
  } | null;
}