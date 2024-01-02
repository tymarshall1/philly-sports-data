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
  initialize(): void;
  record(): string;
  nextGameDetails(): NextGameResult;
  previousGameDetails(): PreviousGameResult;
}

export type { GameService, NextGameResult, PreviousGameResult };
