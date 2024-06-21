import AboutBarndIconList from "../components/pages/about/aboutbrandiconlist/aboutbrandiconlist";
// import CoFounderOfAkamai from "../components/pages/about/cofounderofakamai/cofounderofakamai";
import Meet from "../components/pages/about/meet/meet";
import MyMemories from "../components/pages/about/mymemories/mymemories";
import ResultSpeakes from "../components/pages/about/resultspeakes/resultspeakes";
import SelfDescribe from "../components/pages/about/selfdescribe/selfdescribe";
import SerialEntrepreneur from "../components/pages/about/serialentrepreneur/serialentrepreneur";

export default function Home() {
  return (
    <>
      {/* <div className="pt-[110px]"> */}
      <div className="pt-[80px] md:pt-[105px] lg:pt-[105px] xl:pt-[80px]">
        <Meet />
        <SelfDescribe />

        {/* ---------THESE 2 COMPONENT REMOVED FROM DESIGNE--------- */}
        {/* <CoFounderOfAkamai /> */}
       {/* <AboutBarndIconList/> */}
        <SerialEntrepreneur/>
        <ResultSpeakes/>
        <MyMemories/>

      </div>
    </>
  );
}
