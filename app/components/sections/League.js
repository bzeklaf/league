import React from "react";
import HeadingWhite from "../HeadingWhite";

const League = () => {
  return (
    <div id="league" className="bg-[#1C1C1C]">



      <div className="hidden lg:block relative bg-contain bg-no-repeat bg-center w-5/6 mx-auto" >

        <img src='/images/LOC_bordered.png' alt='Photo1' className='w-full' />

        <div className="absolute top-0 left-0 w-full p-8 text-white">
          <div className="text-center text-white">

            <div className="lg:pt-10">
              <HeadingWhite title={"THE LEAGUE"} subtitle={"WHAT THEY SAY ABOUT LEAGUE OF SOUND"} />
            </div>

            <p className="w-3/6 text-center text-justify mx-auto mt-10">
              <span className="text-yellow-500">League of Sound</span> is the
              newly founded indie music label operating across all sectors of the
              artist development including production, distribution and finance.
              But we are so much more than that - we are the gateway to the
              international music industry.
              <br />
              <br />
              We are an international cultural diplomacy agency focused on
              multidisciplinary cultural content, festivals, music, programming
              and international creative collaborations.
            </p>
          </div>
        </div>
      </div>


      <div className="lg:hidden">

        <div className=" bg-contain bg-no-repeat bg-center" style={{ background: `url('/images/loc_mini.png')` }}>

          <div className="relative w-full p-8 text-white">
            <div className="text-center">
              <HeadingWhite title={"THE LEAGUE"} subtitle={"WHAT THEY SAY ABOUT LEAGUE OF SOUND"} />
            </div>

            <p className="w-5/6 text-center text-justify mx-auto mt-10">
              <span className="text-yellow-500">League of Sound</span> is the
              newly founded indie music label operating across all sectors of the
              artist development including production, distribution and finance.
              But we are so much more than that - we are the gateway to the
              international music industry.
              <br />
              <br />
              We are an international cultural diplomacy agency focused on
              multidisciplinary cultural content, festivals, music, programming
              and international creative collaborations.
            </p>


            <img src='/images/u_tr.png' alt='Photo1' className='absolute top-0 right-0 w-1/12' />
            <img src='/images/u_bl.png' alt='Photo1' className='absolute bottom-0 left-0 w-1/12' />


          </div>






        </div>

      </div>



    </div>

  );
};

export default League;
