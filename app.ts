import matches from "./data/matches";
import { EventParser } from "./event-parser";

export const buildArrayOfParsedEvents = () => {
  let matchesParsed = [];
  for (var i = 0; i < (matches.length); i++) {
    let parser = new EventParser();
    let name = parser.makeEventName(matches[i]);
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
