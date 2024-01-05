import NextGame from "./nextGame";
import PreviousGame from "./previousGame";
import Layout from "../../components/layout";
import TeamBanner from "./teamBanner";
import {
  PreviousGameResult,
  NextGameResult,
} from "../../services/gameServiceInterface";
import { ReactNode } from "react";
import loading from "../../assets/loading.svg";
import Schedule from "./schedule";
import GameSchedule from "../../services/GameScheduleInterface";

type BaseSportsPageProps = {
  loading: boolean;
  error: boolean;
  teamLogo: string;
  nextGameObj: NextGameResult;
  PrevGameObj: PreviousGameResult;
  teamRecord: string;
  teamStanding: string;
  schedule: GameSchedule;
  layoutBannerClr: string;
  teamName: string;
  backgroundClr: string;
  borderClr: string;
  scheduleHeaderClr: string;
  children: ReactNode;
};

function BaseSportsPage(props: BaseSportsPageProps) {
  return (
    <Layout layoutColors={props.layoutBannerClr}>
      {props.loading ? (
        <div className="text-4xl font-bold text-center">
          loading
          <img className="inline-block w-8 h-8 ml-2" src={loading} alt="" />
        </div>
      ) : props.error ? (
        <div className="text-4xl font-bold text-center">
          Error occurred while loading data
        </div>
      ) : (
        <div className="grid h-full gap-8 md:grid-cols-2 xl:grid-cols-3 ">
          <TeamBanner
            teamRecord={props.teamRecord}
            teamStanding={props.teamStanding}
            teamName={props.teamName}
            teamLogo={props.teamLogo}
            backgroundClr={props.backgroundClr}
            borderClr={props.borderClr}
          />

          {props.nextGameObj != null && "nextGameTeam" in props.nextGameObj ? (
            <NextGame
              backgroundClr={props.backgroundClr}
              borderClr={props.borderClr}
              nextGame={props.nextGameObj.nextGameTeam}
              date={props.nextGameObj.nextGameDate}
              time={props.nextGameObj.nextGameTime}
            />
          ) : (
            <NextGame
              backgroundClr={props.backgroundClr}
              borderClr={props.borderClr}
              nextGame={
                props.nextGameObj?.error || "Error loading next game object"
              }
              date={
                props.nextGameObj?.error || "Error loading next game object"
              }
              time={
                props.nextGameObj?.error || "Error loading next game object"
              }
            />
          )}

          {props.PrevGameObj != null &&
          "previousGameTeam" in props.PrevGameObj ? (
            <PreviousGame
              backgroundClr={props.backgroundClr}
              borderClr={props.borderClr}
              previousTeam={props.PrevGameObj.previousGameTeam}
              record={props.PrevGameObj.previousGameRecord}
            />
          ) : (
            <PreviousGame
              backgroundClr={props.backgroundClr}
              borderClr={props.borderClr}
              previousTeam={
                props.PrevGameObj?.error || "Error loading previous game object"
              }
              record={
                props.PrevGameObj?.error || "Error loading previous game object"
              }
            />
          )}
          <Schedule
            schedule={props.schedule}
            backgroundClr={props.backgroundClr}
            borderClr={props.borderClr}
            scheduleHeaderClr={props.scheduleHeaderClr}
          />
          {props.children}
        </div>
      )}
    </Layout>
  );
}

export default BaseSportsPage;
