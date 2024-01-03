import NextGame from "./nextGame";
import PreviousGame from "./previousGame";
import Layout from "../../components/layout";
import TeamBanner from "./teamBanner";
import { ReactNode } from "react";
import loading from "../../assets/loading.svg";

type BaseSportsPageProps = {
  loading: boolean;
  error: boolean;
  teamLogo: string;
  layoutBannerClr: string;
  teamName: string;
  backgroundClr: string;
  borderClr: string;
  children: ReactNode;
};

function BaseSportsPageTesting(props: BaseSportsPageProps) {
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
        <div className="grid gap-8 md:grid-cols-2">
          <TeamBanner
            teamName={props.teamName}
            teamLogo={props.teamLogo}
            backgroundClr={props.backgroundClr}
            borderClr={props.borderClr}
          />

          <NextGame
            backgroundClr={props.backgroundClr}
            borderClr={props.borderClr}
            nextGame={"props.next GameObj.nextG ameTeam"}
            date={"props.next GameObj.nex tGameDate"}
            time={"props.nextG meObj.nextGam eTime"}
          />

          <PreviousGame
            backgroundClr={props.backgroundClr}
            borderClr={props.borderClr}
            previousTeam={"prop s.PrevGame Obj.previousGameTeam"}
            record={"props.PrevG ameObj.pr eviousG ameRecord"}
          />

          {props.children}
        </div>
      )}
    </Layout>
  );
}

export default BaseSportsPageTesting;
