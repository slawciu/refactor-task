import { EventParser } from "./event-parser";
import { EventParserBuilder } from "./event-parser-builder";

/**
 * this class can be also responsible for adding some validators
 * for score format in the same manner how formatters and name makers
 * are added
 */
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
        throw new Error("invalid sport");
    }
  }
}