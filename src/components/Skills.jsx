import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import TypeScript from "../assets/typescript.png";
import ReactImg from "../assets/react.png";
import ReactQuery from "../assets/reactQuery.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Rest from "../assets/rest.png";
import Next from "../assets/nextjs.jpeg";
import BitbucketPipelines from "../assets/BitBucket.jpg";
import Firebase from "../assets/firebase.png";


const Skills = () => {
  return (
    <div name="skills" className="w-full h-auto bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full">
        <div>
          <p className="text-3xl sm:text-4xl font-bold inline border-b-2 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-sm sm:text-base">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          {[
            { src: HTML, label: "HTML" },
            { src: CSS, label: "CSS" },
            { src: JavaScript, label: "JavaScript" },
            { src: TypeScript, label: "TypeScript" },
            { src: Tailwind, label: "Tailwind" },
            { src: ReactImg, label: "React JS" },
            { src: Next, label: "Next JS" },
            { src: Rest, label: "Rest API's" },
            { src: Firebase, label: "Firebase" },
            { src: GitHub, label: "GitHub" },
            { src: BitbucketPipelines, label: "Bitbucket Pipelines" },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="shadow-md shadow-cyan-500/50 hover:scale-110 duration-300"
            >
              <img className="w-16 sm:w-20 mx-auto" src={skill.src} alt={skill.label} />
              <p className="my-4 text-sm sm:text-base">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skills;
