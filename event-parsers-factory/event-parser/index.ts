import { INameMaker } from "../name-makers";
import { IScoreFormatter } from "../score-formatters";
import { Participant } from "../../domain/Participant";
import { Score } from "../../domain/Score";

export class EventParser {
  private scoreFormatter: IScoreFormatter;
  private nameMaker: INameMaker;

  constructor(scoreFormatter: IScoreFormatter, nameMaker: INameMaker) {
    this.scoreFormatter = scoreFormatter;
    this.nameMaker = nameMaker;
  }
  makeEventName(participants: Participant[]) {
    return this.nameMaker.makeName(participants);
  }

  formatScore(score: Score) {
    return this.scoreFormatter.format(score);
  }
}
