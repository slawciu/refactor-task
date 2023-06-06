import { INameMaker } from "../name-makers";
import { IScoreFormatter } from "../score-formatters";
import { Participant } from "../../domain/Participant";
import { Score } from "../../domain/Score";

export class EventParser {
  scoreFormatter: IScoreFormatter;
  nameMaker: INameMaker;

  constructor(scoreFormatter: IScoreFormatter, nameMaker: INameMaker) {
    this.scoreFormatter = scoreFormatter;
    this.nameMaker = nameMaker;
  }
  makeEventName(participants: Participant[]) {
    if (this.nameMaker === undefined) {
      return "Exception: invalid sport";
    }

    return this.nameMaker.makeName(participants[0], participants[1]);
  }

  formatScore(score: Score) {
    if (this.scoreFormatter === undefined) {
      return "Exception: invalid sport";
    }

    return this.scoreFormatter.format(score);
  }
}
