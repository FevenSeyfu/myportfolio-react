import React from 'react'

const Works = () => {
  return (
    <div className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-b-red-600'>Works</p>
                <p className='py-6'>//Check out some of my recent work</p>
            </div>
            {/* projects container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>
                {/* images hover effects */}
                <div>
                  <span></span>
                  <div>
                    <a href="/">
                      <button></button>
                    </a>
                    <a href="/">
                      <button></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Works