import { Score } from "../../domain/Score";
import { ScoreArrayFormatter } from "./score-array";
import { ScoreIncludingSetsFormatter } from "./sets-score";
import { StraightScoreFormatter } from "./straight-score";

export interface IScoreFormatter {
  format(score: Score): string;
}

export { ScoreArrayFormatter, ScoreIncludingSetsFormatter, StraightScoreFormatter };