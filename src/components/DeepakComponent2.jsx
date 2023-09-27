import React from "react";
import Icon1 from "../assets/DeepakIcon1.png";
import Icon2 from "../assets/DeepakIcon2.png";
import Icon3 from "../assets/DeepakIcon3.png";
import Icon4 from "../assets/DeepakIcon4.png";

function DeepakComponent2() {
  return (
    <section className="w-11/12 flex flex-row mx-auto gap-12 my-24">
      <div className="w-1/2 text-5xl font-bold">
        Join our vibrant community of space enthusiasts where you can
      </div>
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-8">
        <div>
          <span>
              <img className="bg-[#63757CCC] object-center p-2 rounded-lg w-12" src={Icon1} />
          </span>
          <div className="text-lg font-semibold my-1">Astronomy 101</div>
          <div className="text-[#171E27]">
            Dive into the basics of astronomy. Learn about stars, planets,
            galaxies, and the tools astronomers use to explore the universe.
          </div>
        </div>
        <div>
          <span>
          <img className="bg-[#63757CCC] object-center p-2 rounded-lg w-12" src={Icon2} />
          </span>
          <div className="text-lg font-semibold my-1">Latest Discoveries</div>
          <div className="text-[#171E27]">
            Stay up-to-date with the most recent breakthroughs and discoveries
            in the field of astrophysics and space exploration.
          </div>
        </div>
        <div>
          <span>
          <img className="bg-[#63757CCC] object-center p-2 rounded-lg w-12" src={Icon3} />
          </span>
          <div className="text-lg font-semibold my-1">Space Exploration</div>
          <div className="text-[#171E27]">
            Explore the latest missions, both past and present, from NASA, ESA,
            SpaceX, and other space agencies and organizations.
          </div>
        </div>
        <div>
          <span>
          <img className="bg-[#63757CCC] object-center p-2 rounded-lg w-12" src={Icon4} />
          </span>
          <div className="text-lg font-semibold my-1">Space Technology</div>
          <div className="text-[#171E27]">
            Delve into the cutting-edge technology powering space exploration,
            from spacecraft and telescopes to propulsion systems and space
            habitats.
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeepakComponent2;
