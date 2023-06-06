import { Score } from "../../../domain/Score";
import { IScoreFormatter } from "..";

export class StraightScoreFormatter implements IScoreFormatter {
  format(score: Score): string {
    return score as string;
  }
}
