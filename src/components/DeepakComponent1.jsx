import React from "react";
import Img1 from "../assets/DeepakImage1.png";

function DeepakComponent1() {
  return (
    <>
      <section className={`w-11/12 mx-auto relative`}>
        <img src={Img1} alt="image"/>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full">
            <h1 className="text-center text-white font-semibold text-5xl w-3/5 mx-auto pt-12">We are committed to making space science accessible to all. Explore our educational resources, including</h1>
        </div>

      </section>
    </>
  );
}

export default DeepakComponent1;
