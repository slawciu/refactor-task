import { EventParserFactory } from "../..";
import { SportEvent } from "../../../domain";

describe('when volleyball match provided', () => {
  const volleyballMatch: SportEvent = {
    sport: 'volleyball',
    participant1: 'Germany',
    participant2: 'France',
    score: '3:0,25:23,25:19,25:21',
  };

  it('should format score', () => {
    const parser = new EventParserFactory().create(volleyballMatch.sport);

    const score = parser.formatScore(volleyballMatch.score);

    expect(score).toBe("Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)");
  });

  it('should make event name', () => {
    const parser = new EventParserFactory().create(volleyballMatch.sport);

    const eventName = parser.makeEventName([volleyballMatch.participant1, volleyballMatch.participant2]);

    expect(eventName).toBe("Germany - France");
  });
});

const scoreCases = [
  ['3:0,25:23,25:19,25:21', 'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)'],
  ['3:2,25:23,25:19,21:25,18:25,15:1', 'Main score: 3:2 (set1 25:23, set2 25:19, set3 21:25, set4 18:25, set5 15:1)'],
];

describe('when score provided', () => {
  test.each(scoreCases)('should return it in a proper format', (givenScore: string, expectedFormattedScore: string) => {
    const parser = new EventParserFactory().create('volleyball');

    const score = parser.formatScore(givenScore);

    expect(score).toBe(expectedFormattedScore);
  });
});