import React from "react";
import Image from "next/image";

const Legal = () => {
    return (
        <div id="legal" className="p-12 lg:p-20">
            <div className="flex flex-col lg:flex-row border-2 border-yellow-500 shadow-lg shadow-black">
                <div className="w-full lg:w-[5/12] order-2 lg:order-1">
                    <img
                        src="/images/Man_mobile.png"
                        alt="Photo2"
                        className="w-[1/2] "
                    />

                    <div className="p-8 lg:w-5/6 mx-auto lg:hidden">
                        <div className="flex items-center gap-6">
                            <div>
                                <img src="/images/Message.png" alt="Photo2" className="h-10" />
                            </div>
                            <div>
                                <span className="text-white">Email</span>
                                <br />
                                <span className="text-white">in@leagueofsound.com</span>
                            </div>
                        </div>
                        <div className="h-[1px] w-4/6 bg-gradient-to-r from-yellow-400 via-orange-400 to-transparent my-6"></div>
                    </div>
                </div>

                <div className="w-full lg:w-[7/12] content-center my-auto order-1 lg:order-2">
                    <h2 className="basis-full towntendisplay uppercase text-center text-3xl lg:text-6xl font-bold my-4 mb-8 bg-gradient-to-r from-yellow-300 to-orange-600 text-transparent bg-clip-text ">
                        Legal Issue
                    </h2>
                    <p className="p-8 w-full  lg:w-5/6 mx-auto">
                        Are you having legal issues with your audio, video or any legal
                        issues related to your music?
                        <br />
                        <br />
                        We will help you deal with any copyright infringement matters or
                        content claims on any platform.
                    </p>

                    <div className="p-8 lg:w-5/6 mx-auto hidden lg:block">
                        <div className="flex items-center gap-6">
                            <div>
                                <img src="/images/Message.png" alt="Photo2" className="h-10" />
                            </div>
                            <div>
                                <span className="text-white">Email</span>
                                <br />
                                <span className="text-white">in@leagueofsound.com</span>
                            </div>
                        </div>
                        <div className="h-[1px] w-4/6 bg-gradient-to-r from-yellow-400 via-orange-400 to-transparent my-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legal;
