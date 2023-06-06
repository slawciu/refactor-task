import { EventParserFactory } from "../../event-parsers-factory";

describe('when handball match provided', () => {
  const handballMatch = {
    sport: 'volleyball',
    participant1: 'Germany',
    participant2: 'France',
    score: '3:0,25:23,25:19,25:21',
  };

  it('should format score', () => {
    const parser = new EventParserFactory().create(handballMatch.sport);

    const score = parser.formatScore(handballMatch);

    expect(score).toBe("Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)");
  });

  it('should make event name', () => {
    const parser = new EventParserFactory().create(handballMatch.sport);

    const eventName = parser.makeEventName(handballMatch);

    expect(eventName).toBe("Germany - France");
  });
});