import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#6699cc]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>fwfsffsffsfsjfsjfsfsfsfosksfmsfkmskdfafmkdfmksfsfksnvksfsfoksfmsfkmsdfkm
                    skcmsnsdfslmksnvsfnsmcksmnvksnfsncklmsvksnfsnv</p>
                <p className='py-2 text-gray-600'>fwfsffsffsfsjfsjfsfsfsfosksfmsfkmskdfafmkdfmksfsfksnvksfsfoksfmsfkmsdfkm
                    skcmsnsdfslmksnvsfnsmcksmnvksnfsncklmsvksnfsnv</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check my projects</p>
            </div>
            <div className='w-full h-autp m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='#'/>
            </div>
        </div>
    </div>
  )
}

export default About