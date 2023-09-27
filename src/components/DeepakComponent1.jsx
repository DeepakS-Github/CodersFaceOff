import React from "react";
import Img1 from "../assets/DeepakImage1.png";
import DeepakComponent1Card from "./DeepakComponent1Card";

function DeepakComponent1() {
  return (
    <>
      <section className={`w-full md:w-11/12 mx-auto relative`}>
        <img src={Img1} alt="image"/>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full">
            <h1 className="text-center text-white font-bold text-5xl w-4/5 mx-auto pt-12">We are committed to making space science accessible to all. Explore our educational resources, including</h1>
        </div>
        <div className="absolute grid grid-cols-1 md:grid-cols-3 w-full  px-6 md:px-12 gap-8 z-50 -translate-y-[40%] ">
            <DeepakComponent1Card number={"01."} text={"Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."} heading={"Online free courses and tutorials"}/>
            <DeepakComponent1Card number={"02."} text={"Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats."} heading={"Resources for teachers and educators"}/>
            <DeepakComponent1Card number={"03."} text={"Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."} heading={"Book recommendations and reviews"}/>
        </div>
      </section>
    </>
  );
}

export default DeepakComponent1;
