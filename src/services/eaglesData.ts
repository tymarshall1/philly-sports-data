import GameService from "./gameServiceInterface";

interface EaglesService extends GameService {}

export default class EaglesData implements EaglesService {
  private url: string =
    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/phi";

  private loadedData: null | {
    team: {
      nextEvent: {
        date: string;
        name: string;
      }[];
      record: {
        items: {
          summary: string;
        }[];
      };
    };
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
      return this.loadedData.team.record.items[0].summary;
    } else throw new Error("Eagles Data Not Loaded");
  }

  public nextGameDate(): string {
    if (this.loadedData) {
      const rawDate: string = this.loadedData.team.nextEvent[0].date;
      const dateObj: Date = new Date(rawDate);
      return dateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } else throw new Error("Eagles Data Not Loaded");
  }

  public nextGameTime(): string {
    if (this.loadedData) {
      const rawDate: string = this.loadedData.team.nextEvent[0].date;
      const dateObj: Date = new Date(rawDate);
      return dateObj.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    } else throw new Error("Eagles Data Not Loaded");
  }

  public nextGameTeam(): string {
    if (this.loadedData) {
      return this.loadedData.team.nextEvent[0].name;
    } else throw new Error("Eagles Data Not Loaded");
  }
}
