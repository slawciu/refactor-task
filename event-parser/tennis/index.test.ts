import { EventParser } from "../";

describe('when tennis match provided', () => {
  const tennisMatch = {
    sport: "tennis",
    participant1: 'Maria Sharapova',
    participant2: 'Serena Williams',
    score: '2:1,7:6,6:3,6:7',
  };

  it('should format score', () => {
    const parser = new EventParser();

    const score = parser.formatScore(tennisMatch);

    expect(score).toBe("Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)");
  });

  it('should make event name', () => {
    const parser = new EventParser();

    const eventName = parser.makeEventName(tennisMatch);

    expect(eventName).toBe("Maria Sharapova vs Serena Williams");
  });
});