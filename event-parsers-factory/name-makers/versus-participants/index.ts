import { INameMaker } from "..";

export class VersusParticipantsNameMaker implements INameMaker {
  makeName(participant1: string, participant2: string): string {
    return `${participant1} vs ${participant2}`;
  }
}
