import { EventParserFactory } from "../..";

describe('when basketball match provided', () => {
  const basketballMatch = {
    sport: 'basketball',
    participant1: 'GKS Tychy',
    participant2: 'GKS Katowice',
    score: [
      ['9:7', '2:1'],
      ['5:3', '9:9']
    ],
  };

  it('should format score', () => {
    const parser = new EventParserFactory().create(basketballMatch.sport);

    const score = parser.formatScore(basketballMatch);

    expect(score).toBe("9:7,2:1,5:3,9:9");
  });

  it('should make event name', () => {
    const parser = new EventParserFactory().create(basketballMatch.sport);

    const eventName = parser.makeEventName([basketballMatch.participant1, basketballMatch.participant2]);

    expect(eventName).toBe("GKS Tychy - GKS Katowice");
  });
});