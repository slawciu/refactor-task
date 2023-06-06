import { EventParserFactory } from "../..";
import { SportEvent } from "../../../domain";

describe('when tennis match provided', () => {
  const tennisMatch: SportEvent = {
    sport: "tennis",
    participant1: 'Maria Sharapova',
    participant2: 'Serena Williams',
    score: '2:1,7:6,6:3,6:7',
  };

  it('should format score', () => {
    const parser = new EventParserFactory().create(tennisMatch.sport);

    const score = parser.formatScore(tennisMatch.score);

    expect(score).toBe("Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)");
  });

  it('should make event name', () => {
    const parser = new EventParserFactory().create(tennisMatch.sport);

    const eventName = parser.makeEventName([tennisMatch.participant1, tennisMatch.participant2]);

    expect(eventName).toBe("Maria Sharapova vs Serena Williams");
  });
});