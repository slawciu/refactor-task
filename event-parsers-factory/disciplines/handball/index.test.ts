import { EventParserFactory } from "../..";

describe('when handball match provided', () => {
  const handballMatch = {
    sport: 'handball',
    participant1: 'Pogoń Szczeciń',
    participant2: 'Azoty Puławy',
    score: '34:26',
  };

  it('should format score', () => {
    const parser = new EventParserFactory().create(handballMatch.sport);

    const score = parser.formatScore(handballMatch);

    expect(score).toBe("34:26");
  });

  it('should make event name', () => {
    const parser = new EventParserFactory().create(handballMatch.sport);

    const eventName = parser.makeEventName(handballMatch);

    expect(eventName).toBe("Pogoń Szczeciń vs Azoty Puławy");
  });
});