import React from "react";
import ProjectCard from "./ProjectCard";
import MCD from "../../assets/MedullaCareDialysis.jpg";
import code from "../../assets/OnlineCodeEditor.jpg";
import currConverter from "../../assets/currencyConverter.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold underline decoration-[#465697]">
        Projects
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Freelancing (Medulla Care Dialysis)"
          main="We have created website for Dailysis Hospital in React-Typescipt and for form validation i have used formik and yup library"
          bannerImg={MCD}
          sourceCode="https://gitlab.com/dij_kstra/medulla-care-dialysis"
        />

        <ProjectCard
          title="Code Editor"
          main="I have created Code Editor in which user can write html, css, javascript and complile them simuntaneously."
          bannerImg={code}
          Demo="https://tusharssinghh.github.io/Code-Editor/"
          sourceCode="https://github.com/Tusharssinghh/Code-Editor"
        />

        <ProjectCard
          title="Currency Converter"
          main="I have created Currency Converter using html, css, js in which user can compare their Indian, US or Euro money with another currency."
          bannerImg={currConverter}
          Demo="https://tusharssinghh.github.io/Currency-Converter/"
          sourceCode="https://github.com/Tusharssinghh/Currency-Converter"
        />
      </div>
    </div>
  );
};

export default Projects;
