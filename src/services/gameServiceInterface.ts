import GameSchedule from "./GameScheduleInterface";

interface NextGameSuccess {
  nextGameTime: string;
  nextGameDate: string;
  nextGameTeam: string;
}

interface PreviousGameSuccess {
  previousGameTeam: string;
  previousGameRecord: string;
}

interface Error {
  error: string;
}

type NextGameResult = NextGameSuccess | Error;
type PreviousGameResult = PreviousGameSuccess | Error;

interface GameService {
  record(): string;
  standing(): string;
  schedule(): GameSchedule;
  nextGameDetails(): NextGameResult;
  previousGameDetails(): PreviousGameResult;
}

export type { GameService, NextGameResult, PreviousGameResult, Error };
