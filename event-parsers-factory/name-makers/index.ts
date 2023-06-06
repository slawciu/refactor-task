import { VersusParticipantsNameMaker } from "./versus-participants";
import { DashedParticipantsNameMaker } from "./dashed-participants";
import { Participant } from "../../domain";

export interface INameMaker {
  makeName(participants: Participant[]): string;
}

export { VersusParticipantsNameMaker, DashedParticipantsNameMaker };