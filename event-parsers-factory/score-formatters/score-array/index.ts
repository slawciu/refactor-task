import { Score } from "../../../domain/Score";
import { IScoreFormatter } from "..";

export class ScoreArrayFormatter implements IScoreFormatter {
  format(score: Score): string {
    return (score as string[][]).flat().join(",");
  }
};
