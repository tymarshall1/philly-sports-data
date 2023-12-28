import Layout from "../componets/layout";
import philliesLogo from "../assets/phillies.svg";
import TeamBanner from "./sportsPageComponets/teamBanner";
export default function PhilliesPage() {
  return (
    <Layout>
      <TeamBanner
        teamName="Philadelphia Phillies"
        teamLogo={philliesLogo}
        backgroundClr="bg-red-600"
        borderClr="border-blue-800"
      />
    </Layout>
  );
}
