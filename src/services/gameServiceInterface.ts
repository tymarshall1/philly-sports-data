export default interface GameService {
  initialize(): void;
  record(): string;
  nextGameDate(): string;
  nextGameTime(): string;
  nextGameTeam(): string;
}
