import { EventParser } from ".";

describe('when volleyball match provided', () => {
  const volleyballMatch = {
    sport: 'volleyball',
    participant1: 'Germany',
    participant2: 'France',
    score: '3:0,25:23,25:19,25:21',
  };

  it('should format score', () => {
    const parser = new EventParser();

    const score = parser.formatScore(volleyballMatch);

    expect(score).toBe("Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)");
  });

  it('should make event name', () => {
    const parser = new EventParser();

    const eventName = parser.makeEventName(volleyballMatch);

    expect(eventName).toBe("Germany - France");
  });
});


describe('when soccer match provided', () => {
  const soccerMatch = {
    sport: 'soccer',
    participant1: 'Chelsea',
    participant2: 'Arsenal',
    score: '2:1',
  };

  it('should format score', () => {
    const parser = new EventParser();

    const score = parser.formatScore(soccerMatch);

    expect(score).toBe("2:1");
  });

  it('should make event name', () => {
    const parser = new EventParser();

    const eventName = parser.makeEventName(soccerMatch);

    expect(eventName).toBe("Chelsea - Arsenal");
  });
});