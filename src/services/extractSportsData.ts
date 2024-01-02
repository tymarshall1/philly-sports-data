import {
  GameService,
  NextGameResult,
  PreviousGameResult,
} from "./gameServiceInterface";

import ApiResponse from "./apiResponseInterface";

export default class SportsData implements GameService {
  private loadedData;

  constructor(loadedData: ApiResponse | null) {
    this.loadedData = loadedData;
  }

  public record(): string {
    if (this.loadedData) {
      return "";
    } else throw new Error("Eagles Data Not Loaded");
  }

  public nextGameDetails(): NextGameResult {
    if (this.loadedData) {
      const schedule = this.loadedData.events;
      const today = new Date();
      let game: ApiResponse;

      for (game of schedule) {
        const gameDate = new Date(game.date);
        if (today <= gameDate) {
          return {
            nextGameTime: gameDate.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }),
            nextGameDate: gameDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            nextGameTeam: game.name,
          };
        }
      }
      return { error: "No upcoming game found" };
    } else {
      return { error: "Data not loaded" };
    }
  }

  public previousGameDetails(): PreviousGameResult {
    if (this.loadedData) {
      const schedule = this.loadedData.events;
      const today = new Date();
      let game: ApiResponse;

      for (let i = 0; i < schedule.length; i++) {
        game = schedule[i];
        const gameDate = new Date(game.date);
        if (today <= gameDate) {
          //if this was the first game of the season break out
          if (i - 1 <= 0) {
            break;
          }
          game = schedule[i - 1];
          const teamOne: string =
            game.competitions[0].competitors[0].team.nickname +
            " : " +
            game.competitions[0].competitors[0].score.displayValue;

          const teamTwo: string =
            game.competitions[0].competitors[1].team.nickname +
            " : " +
            game.competitions[0].competitors[1].score.displayValue;

          return {
            previousGameRecord: teamOne + "\n" + teamTwo,
            previousGameTeam: game.name,
          };
        }
      }

      return { error: "No previous game found" };
    } else {
      return { error: "Data not loaded" };
    }
  }
}
