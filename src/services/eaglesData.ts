import {
  GameService,
  NextGameResult,
  PreviousGameResult,
} from "./gameServiceInterface";

//this is the structure of a single game pulled from the api
type SingleGame = {
  date: string;
  name: string;
  competitions: [
    {
      competitors: [
        {
          score: {
            displayValue: string;
          };
          team: {
            nickname: string;
          };
        },
        {
          team: {
            nickname: string;
          };
          score: {
            displayValue: string;
          };
        }
      ];
    }
  ];
};

interface EaglesService extends GameService {}

export default class EaglesData implements EaglesService {
  private url: string =
    "https://site.web.api.espn.com/apis/site/v2/sports/football/nfl/teams/phi/schedule?region=us&lang=en&seasontype=2";

  private loadedData: null | {
    events: [];
  } = null;

  public async initialize() {
    try {
      const response = await fetch(this.url, {
        method: "GET",
      });
      const responseJson = await response.json();
      this.loadedData = responseJson;
    } catch (error) {
      throw new Error("Problem Loading in Eagles Data");
    }
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
      let game: SingleGame;

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
      let game: SingleGame;

      for (let i = 0; i < schedule.length; i++) {
        game = schedule[i];
        const gameDate = new Date(game.date);
        if (today <= gameDate && i - 1 >= 0) {
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
