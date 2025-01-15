import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <h1>Hi. I'm Ismail, nice to meet you. Please take a look around.</h1>
            </div>
            <div className="text-justify">
              <p>
                As a dedicated Front-end Developer with two years of hands-on
                experience, I am deeply passionate about crafting exceptional software
                that enhances user experiences. My expertise lies in developing
                innovative, user-centric applications tailored to a wide range of
                clients—from individual entrepreneurs to small businesses and large
                enterprises.
              </p>
              <p>
                Throughout my development journey, I have honed my skills in React
                and Next.js, mastering state management, component-driven
                architecture, and the creation of responsive, accessible user
                interfaces. My commitment to writing clean, maintainable code and
                adhering to best practices ensures the delivery of high-quality,
                scalable solutions.
              </p>
                <p>
                If you’re seeking a skilled React/Next.js developer who can turn your
                ideas into reality and deliver outstanding software solutions, let’s
                connect. Together, we can build something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default About;
