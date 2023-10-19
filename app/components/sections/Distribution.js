'use client';
import React from "react";
import HeadingWhite from "../HeadingWhite";
import { Slide,Fade } from "react-awesome-reveal";

const Distribution = () => {
  const distributions = [
    ["AUDIO DISTRIBUTION", "distribution_4.png","We deliver your releases across multiple format - Singles, EP’s, Albums on all platforms across the globe to the highest quality. Our mission is for you to be heard, seen and remembered."],
    ["VIDEO DISTRIBUTION", "distribution_3.png","Innovative team of technicians that can deliver your video to multiple platforms instantly."],
    ["FINANCIAL SUPPORT", "distribution_1.png","We are known to be the artists best friend because of our transparency (transparent contracts, clear royalties, reports, easy payment and fair distribution deals) "],
    ["FINANCIAL SUPPORT", "distribution_2.png","We find solutions to expose your fanbase worldwide. Each artists should feel safe when working with a label or distributor. Your music is our main priority."],
  ];

  return (
    <div id="distribution" className="text-center my-32">
      <HeadingWhite title="OUR Distribution" subtitle={"DISTRIBUTION"} />

      <div className="grid grid-cols-1  justify-items-center my-20 gap-12 gap-y-48 ">
        {distributions.map((distribution, index) => {
          return (
            <div className="group w-full px-20 relative mt-4 lg:mt-4">
              <Fade  triggerOnce delay={100*index}>

              <img
                src={"/images/"+distribution[1]}
                className="hidden lg:block absolute inset-0 w-[90%] h-auto object-cover mx-auto my-auto"
                alt="Background Image"/>

              <img
                src={"/images/M"+distribution[1]}
                className="lg:hidden absolute inset-0 w-[90%] h-auto object-cover mx-auto my-auto"
                alt="Background Image"/>

              <div className="group-hover:hidden absolute inset-0 flex flex-col justify-center items-center">
                <h2 className="select-none towntendisplay text-center text-3xl lg:text-6xl text-white font-bold">
                  {distribution[0]}
                </h2>
              </div>

              <div className="transition-opacity ease-in-out duration-500 group-hover:opacity-100  opacity-0 absolute inset-0 flex flex-col justify-center items-center h-auto">
                <div className="bg-black/40 backdrop-blur-xl border-y-2 border-yellow-400 py-4 w-[90%] mx-auto text-center">
                  <p className="text-white max-w-[70%] mx-auto" >
                    {distribution[2]}
                  </p>
                  </div>
              </div>
        </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Distribution;
