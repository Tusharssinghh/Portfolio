import React from "react";
import tushar from "../../assets/sleepyFreelancerNew.png";
import ChangeText from "../ChangeText";
const Home = () => {
  return (
    <div
      id="Home"
      className="text-white flex w-full justify-between items-start p-10 md:p-20"
    >
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <ChangeText />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Results-Driven Software Developer | Passionate about Crafting Digital
          Experiences | Open to Exciting Opportunities in High-Tech Corporate
          Environments | Master's in Computer Application.
        </p>
        <button className="mt-5 md:md-10 text-white py-02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:sclre-105 font-semibold rounded-3xl bg-[#465697]">
          {/* Contact Me */}
          <a href="#Contact">
            <li className="text-xl transistion-all duration-300 p-1 md:p-0 hover:underline">
              Contact Me
            </li>
          </a>
        </button>
      </div>
      <div>
        <img src={tushar} alt="" />
      </div>
    </div>
  );
};

export default Home;
