import matches from "./data/matches";
import { SportEvent } from "./domain";
import { EventParserFactory } from "./event-parsers-factory";

export const buildArrayOfParsedEvents = () => {
  return matches.map((match: SportEvent) => {
    try {

      let parser = new EventParserFactory().create(match.sport);
      let name = parser.makeEventName([match.participant1, match.participant2]);
      let score = parser.formatScore(match.score);

      return {
        name,
        score
      };
    } catch (e: any) {
      // it wasn't registered before neither, but maybe we should notify someone...
    }
  }).filter(x => x);
};

console.log(buildArrayOfParsedEvents());

