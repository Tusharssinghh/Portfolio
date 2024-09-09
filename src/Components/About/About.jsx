import React from "react";
import crying from "../../assets/CryingClientCancelProjectNew.png";
import {IoArrowForward} from "react-icons/io5";
const About = () => {
  return (
    <div id = "About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl ml-2 md:text-4xl font-bold underline decoration-[#465697]">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-80">
        <img className="md:h-80" src={crying} alt="" />

        <ul>
            <div className="flex gap-3 py-4">
                <IoArrowForward size = {30} className= "mt-1"/>

                <span className="w-96">
                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                    <p className="text-sm md:text-md leading-tight">I have a major interest in FrontEnd Development. For that, At XenonStack, I successfully got hands on experience on C++ and javascript. and also i do regular practice of react re-usable Components along with it. I am also learning Typescript.</p>
                </span>
            </div>

            <div className="flex gap-3 py-4">
                <IoArrowForward size = {30} className= "mt-1"/>

                <span className="w-96">
                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                    <p className="text-sm md:text-md leading-tight">Coming to backend development  i know node.js and express. Also i go through the Model, View, Controller and perfrom <strong>CRUD</strong> operatios. I can also handle API that deals with incoming request from client and request for a data from database either it is relational or non-relational.</p>
                </span>
              </div>


              <div className="flex gap-3 py-4">
                <IoArrowForward size = {30} className= "mt-1"/>

                <span className="w-96">
                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database Developer</h1>
                    <p className="text-sm md:text-md leading-tight">The heart of any applications. I am familiar with <b>Relational and Non-Relational databases</b>. Example: Sql, NoSql, MongoDB, Postges, etc. Also i like to participate in the discussion of whether to choose relational or non-relational database for our project.</p>
                </span>
              </div>

                    
            
          </ul>


      </div>
    </div>
    </div>
  );
};

export default About;
