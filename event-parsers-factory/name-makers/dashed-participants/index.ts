import { INameMaker } from "..";

export class DashedParticipantsNameMaker implements INameMaker {
  makeName(participant1: string, participant2: string): string {
    return `${participant1} - ${participant2}`;
  }
}
