import { Score } from "../../../domain/Score";
import { IScoreFormatter } from "..";

export class ScoreIncludingSetsFormatter implements IScoreFormatter {
  format(score: Score): string {
    let scores = (score as string).split(',');
    if (!scores || scores.length < 4)
      throw new Error("Invalid score format");

    let main = scores[0];
    let sets = scores.slice(1);

    return `Main score: ${main} (${sets.map((set, idx) => `set${idx + 1} ${set}`).join(", ")})`;
  }
}
