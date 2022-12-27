import Image from 'next/image'
import React from 'react'
import htmlimg from '/public/assets/skills/html.png';
import cssimg from '/public/assets/skills/css.png';
import jsimg from '/public/assets/skills/javascript.png';
import reactimg from '/public/assets/skills/react.png';
import tailimg from '/public/assets/skills/tailwind.png';
import gitimg from '/public/assets/skills/github1.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase tracking-widest text-xl text-[#6699cc]'>Skills</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={htmlimg} width={64} height={64} alt='/'/>
                        {/* <img src="public/assets/skills/html.PNG" alt='/'/> */}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={cssimg} width={64} height={64} alt='/'/>
                        {/* <Image src='/../public/assets/skills/css.PNG' width={64} height={64} alt='/'/> */}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={jsimg} width={64} height={64} alt='/'/>
                        {/* <Image src='/../public/assets/skills/javascript.PNG' width={64} height={64} alt='/'/> */}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={reactimg} width={64} height={64} alt='/'/>
                        {/* <Image src='/../public/assets/skills/react.PNG' width={64} height={64} alt='/'/> */}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={tailimg} width={64} height={64} alt='/'/>
                        {/* <Image src='/../public/assets/skills/tailwind.PNG' width={64} height={64} alt='/'/> */}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={gitimg} width={64} height={64} alt='/'/>
                        {/* <Image src='/../public/assets/skills/github.PNG' width={64} height={64} alt='/'/> */}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Github</h3>
                    </div>
                </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills