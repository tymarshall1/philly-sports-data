import Layout from "../componets/layout";
import philliesLogo from "../assets/phillies.svg";
import TeamBanner from "./sportsPageComponets/teamBanner";
export default function PhilliesPage() {
  return (
    <Layout layoutColors="from-blue-800 to-red-600 ">
      <TeamBanner
        teamName="Philadelphia Phillies"
        teamLogo={philliesLogo}
        backgroundClr="bg-red-600"
        borderClr="border-blue-800"
      />
    </Layout>
  );
}
