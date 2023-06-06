import { EventParser } from "./event-parser";
import { EventParserBuilder } from "./event-parser-builder";

export class EventParserFactory {
  create(discipline: string): EventParser {
    const builder = new EventParserBuilder();

    switch (discipline) {
      default:
        return builder.build();
    }
  }
}