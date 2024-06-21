import Image from "next/image";
import Testimonials from "../components/pages/(home)/testimonials";
// import Introduction from "../components/pages/home/homepage/introduction/introduction";
// import Header from "../components/header/header";
// import MeanToBePrepared from "../components/pages/home/homepage/meantobeprepared/meantobeprepared";
// import PrepareExtreme from "../components/pages/home/homepage/prepare-extreme/prepareExtreme";
// import ResultSpeak from "../components/pages/home/homepage/resultspeak/resultspeak";
// import Topics from "../components/pages/home/homepage/topics/topics";
// import MarqueeHome from "../components/pages/home/homepage/marquee/marqueehome";
// import InstagramPosts from "../components/pages/home/homepage/instagramposts/instagramposts";
// import WhatPeopleSay from "../components/pages/home/homepage/whatpeoplesay/whatpeoplesay";

export default function Home() {
  return (
    <>
      {/* <div className="pt-[110px]"> */}
      <div className="pt-[80px] md:pt-[95px]   lg:pt-[55px] xl:pt-[39px]">
        {/* <Introduction /> */}

        <Testimonials/>
      
      </div>
    </>
  );
}
