type card = {
  title: string;
  description: string;
  left: number;
  isActive: boolean;
  pledge: number;
};
type about = {
  title: string | null;
  about: string | null;
};
type stats = {
  stats: stat[];
  progress: number | null;
};
interface stat {
  main: string;
  secoundary: string;
}
interface project {
  title: string;
  subTitle: string;
  isBookmarked: boolean;
  stats: stats;
  about: about;
  ul: card[] | null;
}
export type { card, about, stats, stat, project };
