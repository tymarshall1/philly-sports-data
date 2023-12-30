import Layout from "../componets/layout";
import TeamBanner from "./sportsPageComponets/teamBanner";
import flyersLogo from "../assets/flyers.svg";

export default function FlyersPage() {
  return (
    <Layout layoutColors="from-flyers to-black ">
      <TeamBanner
        teamName="Philadelphia Flyers"
        teamLogo={flyersLogo}
        backgroundClr="bg-flyers"
        borderClr="border-black"
      />
    </Layout>
  );
}
