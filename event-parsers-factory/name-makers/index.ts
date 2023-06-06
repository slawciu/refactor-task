import { VersusParticipantsNameMaker } from "./versus-participants";
import { DashedParticipantsNameMaker } from "./dashed-participants";

export interface INameMaker {
  makeName(participant1: string, participant2: string): string;
}

export { VersusParticipantsNameMaker, DashedParticipantsNameMaker };