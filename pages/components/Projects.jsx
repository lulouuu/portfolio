import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import todoImg from '/public/assets/projects/todo.jpg';
import weatherImg from '/public/assets/projects/weather.jpg';
import cryptoImg from '/public/assets/projects/crypto.jpg';
import fetchImg from '/public/assets/projects/fetch.jpg';
import ProjectList from './ProjectList';

const Projects = () => {
  return (
   <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#6699cc]'>Projects</p>
        <h2 className='py-4'>What I have built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectList title='To-do List' projectImg={todoImg} projectUrl='/todo'/>
          <ProjectList title='Cryptocurrency Price Tracker' projectImg={cryptoImg} projectUrl='/crypto'/>
          <ProjectList title='Weather App' projectImg={weatherImg} projectUrl='/weather'/>
          <ProjectList title='Fetch API Practice in Vanilla JS' projectImg={fetchImg} projectUrl='/fetchAPI'/>

        </div>
      </div>
   </div>
  )
}

export default Projects