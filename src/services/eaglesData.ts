import GameService from "./gameServiceInterface";

interface EaglesService extends GameService {}

export default class EaglesData implements EaglesService {
  private url: string =
    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/phi";

  private loadedData: null | {
    team: { record: { items: { summary: string }[] } };
  } = null;

  public async initialize() {
    try {
      const response = await fetch(this.url, {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
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
    throw new Error("Method not implemented.");
  }
  public nextGameTime(): string {
    throw new Error("Method not implemented.");
  }
  public nextGameTeam(): string {
    throw new Error("Method not implemented.");
  }
}
