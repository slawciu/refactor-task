import { INameMaker } from "../name-makers";
import { IScoreFormatter } from "../score-formatters";

export class EventParser {
  scoreFormatter: IScoreFormatter;
  nameMaker: INameMaker;

  constructor(scoreFormatter: IScoreFormatter, nameMaker: INameMaker) {
    this.scoreFormatter = scoreFormatter;
    this.nameMaker = nameMaker;
  }
  makeEventName(match) {
    if (this.nameMaker === undefined) {
      return "Exception: invalid sport";
    }

    return this.nameMaker.makeName(match.participant1, match.participant2);
  }

  formatScore(match) {
    if (this.scoreFormatter === undefined) {
      return "Exception: invalid sport";
    }

    return this.scoreFormatter.format(match.score);
  }
}
