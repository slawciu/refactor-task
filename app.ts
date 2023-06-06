import matches from "./data/matches";
import { EventParserFactory } from "./event-parsers-factory";

export const buildArrayOfParsedEvents = () => {
  let matchesParsed = [];
  for (var i = 0; i < (matches.length); i++) {
    let parser = new EventParserFactory().create(matches[i].sport);
    let name = parser.makeEventName([matches[i].participant1, matches[i].participant2]);
    let score = parser.formatScore(matches[i]);

    if (name !== 'Exception: invalid sport' && score !== 'Exception: invalid sport') {
      matchesParsed.push({
        name,
        score
      });
    }
  }
  return matchesParsed;
};

const main = () => console.log(buildArrayOfParsedEvents());

main();
