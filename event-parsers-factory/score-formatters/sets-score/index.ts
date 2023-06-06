import { Score } from "../../../domain/Score";
import { IScoreFormatter } from "..";

export class ScoreIncludingSetsFormatter implements IScoreFormatter {
  format(score: Score): string {
    var scores = /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(score as string);
    var set1 = scores[2];
    var set2 = scores[3];
    var set3 = scores[4];

    return "Main score: " + scores[1] + " ("
      + "set1 " + set1 + ", "
      + "set2 " + set2 + ", "
      + "set3 " + set3
      + ")";
  }
}
