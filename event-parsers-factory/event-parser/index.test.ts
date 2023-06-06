import { EventParserFactory } from "..";

describe('when provided match with unknown discipline', () => {
  it('should notify about the invalid sport while score formatting', () => {
    const notSupportedMatch = {
      sport: "ski jumping",
    };

    const parser = new EventParserFactory().create(notSupportedMatch.sport);
    const score = parser.formatScore(notSupportedMatch);

    expect(score).toBe('Exception: invalid sport');
  });

  it('should notify about the invalid sport while event name making', () => {
    const notSupportedMatch = {
      sport: "ski jumping",
    };

    const parser = new EventParserFactory().create(notSupportedMatch.sport);

    const eventName = parser.makeEventName(notSupportedMatch);

    expect(eventName).toBe('Exception: invalid sport');
  });
});