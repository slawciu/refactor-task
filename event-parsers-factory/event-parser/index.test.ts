import { EventParserFactory } from "..";
import { SportEvent } from "../../domain";

describe('when provided match with unknown discipline', () => {
  const notSupportedMatch: SportEvent = {
    sport: "ski jumping",
  };

  it('should notify about the invalid sport while score formatting', () => {
    const parser = new EventParserFactory().create(notSupportedMatch.sport);

    const score = parser.formatScore(notSupportedMatch.score);

    expect(score).toBe('Exception: invalid sport');
  });

  it('should notify about the invalid sport while event name making', () => {
    const parser = new EventParserFactory().create(notSupportedMatch.sport);

    const eventName = parser.makeEventName([notSupportedMatch.participant1, notSupportedMatch.participant2]);

    expect(eventName).toBe('Exception: invalid sport');
  });
});