import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import todoImg from '/public/assets/projects/todo.jpg';
import weatherImg from '/public/assets/projects/weather.jpg';
import cryptoImg from '/public/assets/projects/crypto.jpg';
import fetchImg from '/public/assets/projects/fetch.jpg';
// import ProjectList from './ProjectList';

const Projects = () => {
  return (
   <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#6699cc]'>Projects</p>
        <h2 className='py-4'>What I have built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          {/* <ProjectList title='To-do List' projectImg={todoImg} projectUrl='/todo'/>
          <ProjectList title='Cryptocurrency Price Tracker' projectImg={cryptoImg} projectUrl='/crypto'/>
          <ProjectList title='Weather App' projectImg={weatherImg} projectUrl='/weather'/>
          <ProjectList title='Fetch API Practice in Vanilla JS' projectImg={fetchImg} projectUrl='/fetchAPI'/> */}

<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#6699cc]'>
    <Image className='rounded-xl group-hover:opacity-10' src={todoImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <h3 className='text-2xl text-white tracking-wider text-center'>To-do List App</h3>
      <p className='pb-4 pt-2 text-white text-center'>React JS</p>
      <Link href="/todo">
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
      </Link>
    </div>
  </div>

  <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#6699cc]'>
    <Image className='rounded-xl group-hover:opacity-10' src={cryptoImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <h3 className='text-2xl text-white tracking-wider text-center'>Cryptocurrency Price Tracker</h3>
      <p className='pb-4 pt-2 text-white text-center'>React JS</p>
      <Link href="/crypto">
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
      </Link>
    </div>
  </div>

  <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#6699cc]'>
    <Image className='rounded-xl group-hover:opacity-10' src={weatherImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <h3 className='text-2xl text-white tracking-wider text-center'>Weather App</h3>
      <p className='pb-4 pt-2 text-white text-center'>React JS</p>
      <Link href="/weather">
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
      </Link>
    </div>
  </div>

  <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#6699cc]'>
    <Image className='rounded-xl group-hover:opacity-10' src={fetchImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <h3 className='text-2xl text-white tracking-wider text-center'>Fetch API practice in Javascript</h3>
      <p className='pb-4 pt-2 text-white text-center'>React JS</p>
      <Link href="/fetchAPI">
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
      </Link>
    </div>
  </div>


        </div>
      </div>
   </div>
  )
}

export default Projects