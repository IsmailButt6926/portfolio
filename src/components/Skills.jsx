import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import TypeScript from "../assets/typescript.png"
import ReactImg from '../assets/react.png';
import ReactQuery from '../assets/reactQuery.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Rest from '../assets/rest.png';
const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container  */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-2 inline border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
              
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
                <div className='shadow-md shadow-cyan-500/50 hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-cyan-500/50 hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-cyan-500/50 hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JavaScript} />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-cyan-500/50 hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={TypeScript} />
                    <p className='my-4'>TypeScript</p>
                </div>

                <div className='shadow-md shadow-cyan-500/50 hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Tailwind} />
                    <p className='my-4'>Tailwind</p>
                </div>

                <div className='shadow-md shadow-cyan-500/50 hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={ReactImg} />
                    <p className='my-4'>React JS</p>
                </div>

                <div className='shadow-md shadow-cyan-500/50 hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Rest} />
                    <p className='my-4'>Rest Api's</p>
                </div>

                <div className='shadow-md shadow-cyan-500/50 hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={GitHub} />
                    <p className='my-4'>Github</p>
                </div>

                
             

            </div>
        </div>
    </div>
  )
}

export default Skills