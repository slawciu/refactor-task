import { EventParser } from "../event-parser";
import { DashedParticipantsNameMaker, INameMaker, VersusParticipantsNameMaker } from "../name-makers";
import { IScoreFormatter, ScoreArrayFormatter, ScoreIncludingSetsFormatter, StraightScoreFormatter } from "../score-formatters";

export class EventParserBuilder {
  scoreFormatter: IScoreFormatter;
  nameMaker: INameMaker;

  withStraightScoreFormatter() {
    this.scoreFormatter = new StraightScoreFormatter();
    return this;
  }

  withScoreIncludingSetsFormatter() {
    this.scoreFormatter = new ScoreIncludingSetsFormatter();
    return this;
  }

  withScoreArrayFormatter() {
    this.scoreFormatter = new ScoreArrayFormatter();
    return this;
  }

  withDashedParticipantsNameMaker() {
    this.nameMaker = new DashedParticipantsNameMaker();
    return this;
  }

  withVersusNameMaker() {
    this.nameMaker = new VersusParticipantsNameMaker();
    return this;
  }

  build() {
    if (this.scoreFormatter === undefined) {
      throw new Error("Missing score formatter configuration");
    }

    if (this.scoreFormatter === undefined) {
      throw new Error("Missing name maker configuration");
    }

    return new EventParser(this.scoreFormatter, this.nameMaker);
  }
}