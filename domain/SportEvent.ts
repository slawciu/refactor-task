import { Score } from "./Score";

export type SportEvent = {
  sport: string;
  score?: Score;
  participant1?: string;
  participant2?: string;
};