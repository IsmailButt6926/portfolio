import React from 'react';
import workImg from "../assets/workImg.jpeg";
import tailwindImg from "../assets/tailwindProject1.png";
import tailwindImg2 from "../assets/tailwindProject2.png";
import covidImg from "../assets/covidTracker.png";
import reactCrud from "../assets/reactQueryCrud.png";
import pigGame from "../assets/pigGame.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h3 className="text-4xl font-bold inline border-b-4 border-pink-600">Work</h3>
          <h3 className="py-6">Check out some of my recent work</h3>
        </div>

        {/* Grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Grid Item 1 */}
          <div
            style={{ backgroundImage: `url(${tailwindImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white">React/Tailwind Application</span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IsmailButt6926/Tailwind-Design-2">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div
            style={{ backgroundImage: `url(${tailwindImg2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white">React/Tailwind Application</span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IsmailButt6926/Tailwind-Design-1/tree/324ebdb9930cf1a18cf74d74ea47e6ff753cd7cf">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div
            style={{ backgroundImage: `url(${covidImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IsmailButt6926/live-covid-tracker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>


               {/* grid Item 2*/}
               <div style={{ backgroundImage: `url(${reactCrud})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

            {/* Hover Effects  */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white '>React/Query Application</span>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a> */}
                <a href='https://github.com/IsmailButt6926/UserQuery-Crud-Operation'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${pigGame})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

            {/* Hover Effects  */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white '>JavaScript Application</span>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a> */}
                <a href='https://github.com/IsmailButt6926/Pig-Game'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* grid Item 2*/}
          <div style={{ backgroundImage: `url(${workImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

            {/* Hover Effects  */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white '>React JS Application</span>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a> */}
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
