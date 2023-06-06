import { INameMaker } from "..";
import { Participant } from "../../../domain";

export class DashedParticipantsNameMaker implements INameMaker {
  makeName(participants: Participant[]): string {
    return participants.join(" - ");
  }
}
