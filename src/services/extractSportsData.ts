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
      return this.loadedData.team.recordSummary;
    }
    return "Error occurred while loading record";
  }

  public standing(): string {
    if (this.loadedData) {
      return this.loadedData.team.standingSummary;
    }
    return "Error occurred while loading standing";
  }

  public schedule() {
    const gameSchedule = [];
    if (this.loadedData) {
      const schedule = this.loadedData.events;
      let game: ApiResponse;
      for (game of schedule) {
        const dateObj = new Date(game.date);
        const singleGame = {
          gameName: game.shortName,
          date: dateObj.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          time: dateObj.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          homeTeamLogo: game.competitions[0].competitors[0].team.logos[0].href,
          homeTeamName:
            game.competitions[0].competitors[0].team.shortDisplayName,
          awayTeamLogo: game.competitions[0].competitors[1].team.logos[0].href,
          awayTeamName:
            game.competitions[0].competitors[1].team.shortDisplayName,
        };

        gameSchedule.push(singleGame);
      }
      return gameSchedule;
    }
    return [
      {
        gameName: "error loading schedule",
        date: "error loading schedule",
        time: "error loading schedule",
        homeTeamLogo: "error loading schedule",
        homeTeamName: "error loading schedule",
        awayTeamLogo: "error loading schedule",
        awayTeamName: "error loading schedule",
      },
    ];
  }

  public nextGameDetails(): NextGameResult {
    if (this.loadedData) {
      const schedule = this.loadedData.events;
      const today = new Date();
      today.setHours(0);
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

  private previousGameDetailsHelper(game: ApiResponse) {
    const teamOneName: string = game.competitions[0].competitors[0].team
      .nickname
      ? game.competitions[0].competitors[0].team.nickname
      : game.competitions[0].competitors[0].team.shortDisplayName;

    const teamOneScore: string =
      game.competitions[0].competitors[0].score.displayValue;

    const teamTwoName: string = game.competitions[0].competitors[1].team
      .nickname
      ? game.competitions[0].competitors[1].team.nickname
      : game.competitions[0].competitors[1].team.shortDisplayName;

    const teamTwoScore: string =
      game.competitions[0].competitors[1].score.displayValue;

    const teamOne = teamOneName + ": " + teamOneScore;
    const teamTwo = teamTwoName + ": " + teamTwoScore;

    return {
      previousGameRecord: teamOne + " - " + teamTwo,
      previousGameTeam: game.name,
    };
  }

  public previousGameDetails(): PreviousGameResult {
    if (this.loadedData) {
      const schedule = this.loadedData.events;
      const today = new Date();
      today.setHours(0);
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
          const { previousGameRecord, previousGameTeam } =
            this.previousGameDetailsHelper(game);
          return {
            previousGameRecord: previousGameRecord,
            previousGameTeam: previousGameTeam,
          };
        }
        //last game of season
        if (i + 1 === schedule.length) {
          const { previousGameRecord, previousGameTeam } =
            this.previousGameDetailsHelper(game);
          return {
            previousGameRecord: previousGameRecord,
            previousGameTeam: previousGameTeam,
          };
        }
      }

      return { error: "No previous game found" };
    } else {
      return { error: "Data not loaded" };
    }
  }
}
