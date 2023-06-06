import { EventParserFactory } from "../..";

describe('when soccer match provided', () => {
  const soccerMatch = {
    sport: 'soccer',
    participant1: 'Chelsea',
    participant2: 'Arsenal',
    score: '2:1',
  };

  it('should format score', () => {
    const parser = new EventParserFactory().create(soccerMatch.sport);

    const score = parser.formatScore(soccerMatch);

    expect(score).toBe("2:1");
  });

  it('should make event name', () => {
    const parser = new EventParserFactory().create(soccerMatch.sport);

    const eventName = parser.makeEventName(soccerMatch);

    expect(eventName).toBe("Chelsea - Arsenal");
  });
});