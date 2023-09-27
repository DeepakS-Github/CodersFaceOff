import React from "react";
import PlayImage from "../assets/DeepakPlay.png";
import LostImage from "../assets/lost.png";
import Group122 from "../assets/Group122.png";
import Group121 from "../assets/Group121.png";
import Group117 from "../assets/Group117.png";
import Group120 from "../assets/Group120.png";
function HeroBottom() {
  return (
    <div className="mb-[20vh]">
      <div className="flex justify-between mt-4">
        <div className="w-[50%]">
          <p className="text-lg">
            At odissey, our mission is to inspire, educate, and ignite your
            passion for the cosmos. We are your premier destination for all
            things related to space exploration, astronomy, and the mysteries of
            the universe. Whether you're a seasoned astronomer or a curious
            novice, join us on a journey to the furthest reaches of the cosmos.
          </p>
          <div className="mt-4 flex ">
            <button className="pt-2 pb-2 pl-4 pr-4 w-[8vw] shadow rounded-lg bg-black text-white">
              GetStarted
            </button>
            <button className="pt-2 font-semibold pb-2 pl-4 pr-4 w-[12vw] flex justify-center items-center gap-4  rounded-lg">
                Watch Video
                <img src={PlayImage} className="w-8"></img>
            </button>
          </div>
        </div>
        <div className="w-[50%] absolute top-[2rem] right-0 ">
          <div>
            <img src={LostImage}></img>
          </div>
          <div className="absolute top-[16rem] right-[24rem] ">
            <img src={Group122}></img>
          </div>
          <div className="absolute  right-[6rem] -translate-y-[30%]">
            <img src={Group121}></img>
          </div>
          <div className="absolute top-[12rem] right-[2rem] ">
            <img src={Group117}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBottom;
