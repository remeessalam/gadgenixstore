import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
import aboutvideo from "../assets/video/aboutusvideo.mp4";
import teamVidThumb from "../assets/images/videothumb.png";
const Aboutus = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  return (
    <div className="bg-black spacebetween">
      <div className="w-full grid md:grid-cols-2 wrapper">
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="h-[18vh] sm:h-[44vh]  relative w-full"
        >
          {isVideoLoading && (
            <div className="absolute top-0 left-0 w-full h-full  flex justify-center items-center">
              <img src={teamVidThumb} className="rounded-lg" alt="" />
            </div>
          )}
          <div className="w-[90%] mx-auto sm:w-full h-full relative rounded-xl overflow-hidden">
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <BiPlay className="text-[3rem] text-black" />
              </button>
            )}
            <ReactPlayer
              className="h-full w-full z-0 absolute video-cover object-cover"
              url={aboutvideo}
              playing={isPlaying}
              width="100%"
              height="100%"
              pip={false}
              playsinline={true}
              onReady={() => setIsVideoLoading(false)}
              config={{
                file: {
                  attributes: {
                    preload: "auto",
                    controlsList: "nodownload noplaybackrate",
                    disablePictureInPicture: true,
                    playsinline: true,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="text-white h-full flex flex-col space-y-5 sm:space-y-10 px-4">
          <h3 className="heading sm:mt-0 mt-5">
            We Are Here to Enhance Your Modern Life
          </h3>
          <p className="desc">
            At Gadgenix.store, we are committed to revolutionizing the way you
            live with smart gadgets designed to simplify and elevate your daily
            routines. Our mission is to seamlessly integrate cutting-edge
            technology into your lifestyle, empowering you to achieve more with
            ease and efficiency.
          </p>
          <button className="primary-btn">More About us</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
