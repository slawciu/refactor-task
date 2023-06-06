import { EventParserFactory } from ".";
import { SportEvent } from "../domain";

describe('when provided match with unknown discipline', () => {
  const notSupportedMatch: SportEvent = {
    sport: "ski jumping",
  };

  it('should throw Error with invalid sport message', () => {
    expect(() => new EventParserFactory().create(notSupportedMatch.sport)).toThrow("invalid sport");
  });
});