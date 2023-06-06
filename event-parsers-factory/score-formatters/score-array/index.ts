import { Score } from "../../../domain/Score";
import { IScoreFormatter } from "..";

export class ScoreArrayFormatter implements IScoreFormatter {
  format(score: Score): string {
    return score[0][0] + ',' + score[0][1] + ',' + score[1][0] + ',' + score[1][1];
  }
}
