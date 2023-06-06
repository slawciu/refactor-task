import { INameMaker } from "..";
import { Participant } from "../../../domain";

export class VersusParticipantsNameMaker implements INameMaker {
  makeName(participants: Participant[]): string {
    return participants.join(" vs ");
  }
}
