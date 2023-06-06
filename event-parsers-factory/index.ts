import { EventParser } from "./event-parser";
import { EventParserBuilder } from "./event-parser-builder";

export class EventParserFactory {
  create(discipline: string): EventParser {
    const builder = new EventParserBuilder();

    switch (discipline) {
      case 'basketball':
        return builder
          .withScoreArrayFormatter()
          .withDashedParticipantsNameMaker()
          .build();
      case 'soccer':
        return builder
          .withStraightScoreFormatter()
          .withDashedParticipantsNameMaker()
          .build();
      case 'tennis':
        return builder
          .withScoreIncludingSetsFormatter()
          .withVersusNameMaker()
          .build();
      case 'volleyball':
        return builder
          .withScoreIncludingSetsFormatter()
          .withDashedParticipantsNameMaker()
          .build();
      case 'handball':
        return builder
          .withStraightScoreFormatter()
          .withVersusNameMaker()
          .build();
      default:
        return builder.build();
    }
  }
}