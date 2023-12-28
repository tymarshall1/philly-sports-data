import Layout from "../componets/layout";
import TeamBanner from "./sportsPageComponets/teamBanner";
import eaglesLogo from "../assets/eagles.svg";

export default function EaglesPage() {
  return (
    <Layout>
      <TeamBanner
        teamName="Philadelphia Eagles"
        backgroundClr="bg-green-800"
        borderClr="border-black"
        teamLogo={eaglesLogo}
      />
    </Layout>
  );
}
